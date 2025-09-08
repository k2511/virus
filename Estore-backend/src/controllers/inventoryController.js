import db from '../config/db.js'; 


// 1️⃣ Get all brands (without products)
export const getBrands = async (req, res) => {
  try {
    const [brands] = await db.query(
      `SELECT BID, bname FROM brand ORDER BY BID ASC`
    );
    res.json(brands);
  } catch (err) {
    res.status(500).json(err);
  }
};


export const getBrandProducts = async (req, res) => {
  try {
    const { BID } = req.params;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 50;
    const offset = (page - 1) * limit;


    // 3️⃣ Fetch products from `pro_main` using br_id
    const query = `
      SELECT p.PID, p.pname, p.price7 AS price,
             (SELECT COUNT(*) FROM qeys WHERE PID = p.PID) AS stock,
             (SELECT COUNT(*) FROM soldq WHERE pname = p.pname) AS sold
      FROM product p
      WHERE p.BID = ?
      ORDER BY p.PID ASC
      LIMIT ? OFFSET ?
    `;

    const [products] = await db.query(query, [BID, limit, offset]);

    res.json({ products });
  } catch (err) {
    console.error("Error fetching brand products:", err);
    res.status(500).json({ error: err.message });
  }
};

