import express from "express";
import { 
  getSoldKeys, 
  createSoldKey, 
  updateSoldKey, 
  deleteSoldKey, 
  createKeys, 
  getAllKeys,
  updateKey,
  deleteKey,
  sendLicenseKey   // ✅ email controller
} from "../controllers/keyController.js";

const router = express.Router();

/**
 * ============================
 * SOLD KEYS ROUTES (soldq)
 * ============================
 */

/**
 * @route   GET /api/keys/soldkeys
 * @desc    Get all sold keys
 */
router.get("/soldkeys", getSoldKeys);

/**
 * @route   POST /api/keys/soldkeys
 * @desc    Add a new sold key
 */
router.post("/soldkeys", createSoldKey);

/**
 * @route   PUT /api/keys/soldkeys/:id
 * @desc    Update a sold key by SQID
 */
router.put("/soldkeys/:id", updateSoldKey);

/**
 * @route   DELETE /api/keys/soldkeys/:id
 * @desc    Delete a sold key by SQID
 */
router.delete("/soldkeys/:id", deleteSoldKey);

/**
 * @route   POST /api/keys/soldkeys/send/:id
 * @desc    Send license key by email for a sold key
 */
router.post("/soldkeys/send/:id", sendLicenseKey);


/**
 * ============================
 * KEYS ROUTES (qeys)
 * ============================
 */

/**
 * @route   POST /api/keys/add
 * @desc    Insert multiple product keys into qeys table
 */
router.post("/add", createKeys);

/**
 * @route   POST /api/keys
 * @desc    Insert multiple product keys into qeys table (frontend shortcut)
 */
router.post("/", createKeys);

/**
 * @route   GET /api/keys
 * @desc    Get all product keys from qeys table
 */
router.get("/", getAllKeys);

/**
 * @route   PUT /api/keys/:id
 * @desc    Update a product key by QID
 */
router.put("/:id", updateKey);

/**
 * @route   DELETE /api/keys/:id
 * @desc    Delete a product key by QID
 */
router.delete("/:id", deleteKey);

export { router as keyRouter };