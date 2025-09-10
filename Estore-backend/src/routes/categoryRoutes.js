import express from "express";
import {
  createCategory,
  deleteCategory,
  getCategories,
  getCategoryById,
  getOldCategories,
  updateCategory
} from "../controllers/categoryController.js";

const router = express.Router();

// CRUD Routes
router.post("/", createCategory);
router.get("/", getCategories);
router.get("/old", getOldCategories);
router.get("/:id", getCategoryById);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);

export { router as categoryRouter };
