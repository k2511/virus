import db from "../config/db.js";

export const deleteProduct = async (req, res) => {
  try {
    const [result] = await db.query("DELETE FROM product WHERE PID = ?", [
      req.params.id,
    ]);
    res.json({ message: "Product deleted", affected: result.affectedRows });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get All Products
export const getProducts = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM product ORDER BY PID DESC");
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM product WHERE PID = ?", [
      req.params.id,
    ]);
    if (rows.length === 0) return res.status(404).json({ message: "Not found" });
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create Product
export const createProduct = async (req, res) => {
  try {
    const {
      cname, bname, pname, mprice, oprice,
      features, systemreq, description, csupport,
      dlink, dprocess, BID, CTID, no_of_stock,
      keywords, meta_key, meta_desc, region, status,
      price7, dprice
    } = req.body;

    // Save image if uploaded
    const imagePath = req.file ? `action/photos/${req.file.filename}` : null;

    // Build insert query
    const sql = `
      INSERT INTO product 
      (cname, bname, pname, mprice, oprice, features, systemreq, description, csupport, dlink, dprocess, pic1, BID, CTID, no_of_stock, keywords, meta_key, meta_desc, region, status, price7, dprice, dt1) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())
    `;

    const values = [
      cname, bname, pname, mprice, oprice,
      features, systemreq, description, csupport,
      dlink, dprocess, imagePath, BID, CTID,
      no_of_stock, keywords, meta_key, meta_desc,
      region, status, price7, dprice
    ];

    const [result] = await db.query(sql, values);

    res.status(201).json({
      message: "✅ Product created successfully",
      id: result.insertId,
      image: imagePath
    });
  } catch (error) {
    console.error("❌ Create Product Error:", error);
    res.status(500).json({ error: error.message });
  }
};


// ✅ Update Product
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      cname, bname, pname, mprice, oprice,
      features, systemreq, description, csupport,
      dlink, dprocess, BID, CTID, no_of_stock,
      keywords, meta_key, meta_desc, region, status,
      price7, dprice
    } = req.body;

    // If new image uploaded
    const imagePath = req.file ? `action/photos/${req.file.filename}` : null;

    // Build update query
    const sql = `
      UPDATE product 
      SET cname = ?, bname = ?, pname = ?, mprice = ?, oprice = ?, 
          features = ?, systemreq = ?, description = ?, csupport = ?, 
          dlink = ?, dprocess = ?, 
          ${imagePath ? "pic1 = ?," : ""} 
          BID = ?, CTID = ?, no_of_stock = ?, keywords = ?, 
          meta_key = ?, meta_desc = ?, region = ?, status = ?, 
          price7 = ?, dprice = ? 
      WHERE PID = ?
    `;

    // Prepare values (conditionally push imagePath)
    const values = [
      cname, bname, pname, mprice, oprice,
      features, systemreq, description, csupport,
      dlink, dprocess,
    ];

    if (imagePath) values.push(imagePath);

    values.push(
      BID, CTID, no_of_stock, keywords,
      meta_key, meta_desc, region, status,
      price7, dprice, id
    );

    const [result] = await db.query(sql, values);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "❌ Product not found" });
    }

    res.json({
      message: "✅ Product updated successfully",
      id,
      image: imagePath || "unchanged",
    });
  } catch (error) {
    console.error("❌ Update Product Error:", error);
    res.status(500).json({ error: error.message });
  }
};



