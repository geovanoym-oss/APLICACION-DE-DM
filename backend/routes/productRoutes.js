const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

// GET /api/products
// GET /api/products?category=sillas
// GET /api/products?search=razer
router.get("/", async (req, res) => {
  try {
    const { category, search } = req.query;
    const filter = {};

    // Filtra por una de las categorías: sillas, monitores, pcs-armadas o componentes.
    if (category) {
      filter.category = category;
    }

    // Busca texto en el nombre o marca del producto.
    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: "i" } },
        { brand: { $regex: search, $options: "i" } },
      ];
    }

    const products = await Product.find(filter).sort({ id: 1 });

    res.json({
      total: products.length,
      products,
    });
  } catch (error) {
    res.status(500).json({
      message: "No fue posible obtener los productos.",
      error: error.message,
    });
  }
});

// GET /api/products/12
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findOne({
      id: Number(req.params.id),
    });

    if (!product) {
      return res.status(404).json({
        message: "Producto no encontrado.",
      });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({
      message: "No fue posible obtener el producto.",
      error: error.message,
    });
  }
});

module.exports = router;
