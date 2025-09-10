import db from "../config/db.js";
import nodemailer from "nodemailer";

/**
 * ============================
 * SOLD KEYS (soldq table)
 * ============================
 */

// Get all sold keys
export const getSoldKeys = async (req, res) => {
  try {
    const [results] = await db.query(`
      SELECT 
        SQID,
        txnid AS orderId,
        pname AS product,
        tprice AS amount,
        name AS customer,
        email,
        cmobile AS phone,
        key1 AS licenseKey,
        invoice,
        sdate AS soldAt
      FROM soldq
      ORDER BY SQID DESC
    `);

    res.status(200).json(results);
  } catch (err) {
    console.error("❌ Error fetching sold keys:", err.message);
    res.status(500).json({
      message: "Database error while fetching sold keys",
      error: err.message,
    });
  }
};

// Add a sold key
export const createSoldKey = async (req, res) => {
  try {
    const { orderId, product, amount, customer, email, phone, licenseKey, invoice, soldAt } =
      req.body;

    if (!orderId || !product || !amount || !customer || !licenseKey) {
      return res.status(400).json({
        message:
          "Missing required fields: orderId, product, amount, customer, licenseKey",
      });
    }

    const [result] = await db.query(
      `INSERT INTO soldq 
        (txnid, pname, tprice, name, email, cmobile, key1, invoice, sdate) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        orderId,
        product,
        amount,
        customer,
        email || "",
        phone || "",
        licenseKey,
        invoice || "",
        soldAt || new Date(),
      ]
    );

    res.status(201).json({
      message: "Sold key created successfully",
      insertedId: result.insertId,
    });
  } catch (err) {
    console.error("❌ Error creating sold key:", err.message);
    res.status(500).json({
      message: "Database error while creating sold key",
      error: err.message,
    });
  }
};

// Update sold key
export const updateSoldKey = async (req, res) => {
  try {
    const { id } = req.params;
    const { orderId, product, amount, customer, email, phone, licenseKey, invoice, soldAt } =
      req.body;

    if (!id) return res.status(400).json({ message: "ID is required" });

    const [existing] = await db.query("SELECT * FROM soldq WHERE SQID = ?", [
      id,
    ]);
    if (existing.length === 0) {
      return res.status(404).json({ message: "Record not found" });
    }

    const [result] = await db.query(
      `UPDATE soldq 
       SET txnid=?, pname=?, tprice=?, name=?, email=?, cmobile=?, key1=?, invoice=?, sdate=? 
       WHERE SQID=?`,
      [orderId, product, amount, customer, email, phone, licenseKey, invoice, soldAt, id]
    );

    res.status(200).json({
      message: "Updated successfully",
      updatedId: id,
      affectedRows: result.affectedRows,
    });
  } catch (err) {
    console.error("❌ Error updating sold key:", err.message);
    res.status(500).json({
      message: "Database error while updating sold key",
      error: err.message,
    });
  }
};

// Delete sold key
export const deleteSoldKey = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ message: "ID is required" });

    const [results] = await db.query("DELETE FROM soldq WHERE SQID = ?", [id]);

    if (results.affectedRows === 0) {
      return res.status(404).json({ message: "Record not found" });
    }

    res.status(200).json({ message: "Deleted successfully", deletedId: id });
  } catch (err) {
    console.error("❌ Error deleting sold key:", err.message);
    res.status(500).json({
      message: "Database error while deleting sold key",
      error: err.message,
    });
  }
};

/**
 * ============================
 * ADD KEYS (qeys table)
 * ============================
 */

// Add multiple keys to qeys table
export const createKeys = async (req, res) => {
  try {
    const { product, distributor, invoiceNo, purchasePrice, keys } = req.body;

    if (!product || !distributor || !invoiceNo || !keys?.length || !purchasePrice) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const values = keys.map((key) => [
      product,
      distributor,
      invoiceNo,
      null,
      key,
      null,
      0,
      purchasePrice,
      new Date(),
    ]);

    const [result] = await db.query(
      `INSERT INTO qeys 
        (PID, distributer, invoice, validity, qey, pname, d_id, p_price, cdate) 
       VALUES ?`,
      [values]
    );

    res.status(201).json({
      message: "Keys added successfully",
      insertedCount: result.affectedRows,
    });
  } catch (err) {
    console.error("❌ Error inserting keys:", err.message);
    res.status(500).json({
      message: "Database error while inserting keys",
      error: err.message,
    });
  }
};

// Get all qeys
export const getAllKeys = async (req, res) => {
  try {
    const [results] = await db.query(`
      SELECT 
        QID,
        PID,
        pname,
        distributer,
        invoice,
        validity,
        qey,
        d_id,
        p_price,
        cdate
      FROM qeys
      ORDER BY QID DESC
    `);

    res.status(200).json(results);
  } catch (err) {
    console.error("❌ Error fetching all keys:", err.message);
    res.status(500).json({
      message: "Database error while fetching keys",
      error: err.message,
    });
  }
};

/**
 * ============================
 * UPDATE & DELETE KEYS (qeys)
 * ============================
 */

// Update key in qeys
export const updateKey = async (req, res) => {
  try {
    const { id } = req.params;
    const { pname, distributer, invoice, validity, qey, p_price } = req.body;

    if (!id) return res.status(400).json({ message: "ID is required" });

    const [existing] = await db.query("SELECT * FROM qeys WHERE QID = ?", [id]);
    if (existing.length === 0) {
      return res.status(404).json({ message: "Key not found" });
    }

    await db.query(
      `UPDATE qeys 
       SET pname=?, distributer=?, invoice=?, validity=?, qey=?, p_price=? 
       WHERE QID=?`,
      [pname, distributer, invoice, validity, qey, p_price, id]
    );

    res.status(200).json({ message: "Key updated", updatedId: id });
  } catch (err) {
    console.error("❌ Error updating key:", err.message);
    res.status(500).json({ message: "Database error", error: err.message });
  }
};

// Delete key from qeys
export const deleteKey = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ message: "ID is required" });

    const [result] = await db.query("DELETE FROM qeys WHERE QID = ?", [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Key not found" });
    }

    res.status(200).json({ message: "Key deleted", deletedId: id });
  } catch (err) {
    console.error("❌ Error deleting key:", err.message);
    res.status(500).json({ message: "Database error", error: err.message });
  }
};

/**
 * ============================
 * SEND LICENSE KEY (EMAIL)
 * ============================
 */
export const sendLicenseKey = async (req, res) => {
  try {
    const { id } = req.params; // SQID of sold key
    const { email } = req.body;

    console.log("📩 Send License Request", { id, email });

    if (!id) return res.status(400).json({ message: "ID is required" });
    if (!email) return res.status(400).json({ message: "Email is required" });

    // Fetch record from DB
    const [rows] = await db.query(
      `SELECT name AS customer, key1 AS licenseKey, pname AS product, invoice, txnid, sdate 
       FROM soldq WHERE SQID = ?`,
      [id]
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: "Record not found" });
    }

    const record = rows[0];
    console.log("✅ Found record:", record);

    // Check env
    if (!process.env.MAIL_USER || !process.env.MAIL_PASS) {
      console.error("❌ MAIL_USER or MAIL_PASS not set in .env");
      return res.status(500).json({
        message: "Email configuration missing",
      });
    }

    // Configure transporter
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST || "smtp.gmail.com", // fallback to Gmail
      port: process.env.MAIL_PORT ? Number(process.env.MAIL_PORT) : 465,
      secure: true, // true for 465, false for 587
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS, // For Gmail use "App Password", not real password
      },
    });

    // Verify transporter before sending
    await transporter.verify();
    console.log("✅ SMTP connection verified");

    // Mail content
    const mailOptions = {
      from: `Your Company < ${ process.env.MAIL_USER }>`,
        to: email,
          subject: `Your License Key for ${ record.product }`,
            text: `Hello ${record.customer},

            Thank you for your purchase!

            Order ID: ${record.txnid}
            Product: ${record.product}
            License Key: ${record.licenseKey}
            Invoice: ${record.invoice}
            Date: ${new Date(record.sdate).toLocaleDateString()}

            Best Regards,
            Your Company`,
              html: `
        <p>Hello <b>${record.customer}</b>,</p>
        <p>Thank you for your purchase!</p>
        <ul>
          <li><b>Order ID:</b> ${record.txnid}</li>
          <li><b>Product:</b> ${record.product}</li>
          <li><b>License Key:</b> <code>${record.licenseKey}</code></li>
          <li><b>Invoice:</b> ${record.invoice}</li>
          <li><b>Date:</b> ${new Date(record.sdate).toLocaleDateString()}</li>
        </ul>
        <p>Best Regards,<br>Your Company</p>
      `,
    };

  // Send email
  const info = await transporter.sendMail(mailOptions);
  console.log("✅ Email sent:", info.messageId);

  res.status(200).json({ message: "License key sent successfully" });
} catch (err) {
  console.error("❌ Error sending license key:", err);
  res.status(500).json({
    message: "Error sending license key",
    error: err.message,
  });
}
};