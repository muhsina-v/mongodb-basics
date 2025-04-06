import express from "express";
import {
  getAllProducts,
  getProductsById,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/getAllProducts", getAllProducts)
.get("/getById", getProductsById);

export default router;
