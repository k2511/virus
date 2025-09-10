import express from "express";
import { getBrands, getBrandProducts } from "../controllers/inventoryController.js";

const router = express.Router();

router.get("/brands", getBrands);

router.get("/brand/:BID/products", getBrandProducts);

export { router as inventoryRouter };
