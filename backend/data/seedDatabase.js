require("dotenv").config();

const mongoose = require("mongoose");
const connectDB = require("../config/db");
const Product = require("../models/Product");
const products = require("./seedProducts");

// Conecta con MongoDB.
connectDB();

const importProducts = async () => {
  try {
    // Elimina solo los productos anteriores para evitar duplicados.
    await Product.deleteMany();

    // Inserta los 40 productos de seedProducts.js.
    await Product.insertMany(products);

    console.log("✅ Se cargaron los 40 productos correctamente.");
    process.exit(0);
  } catch (error) {
    console.error(`❌ Error al cargar productos: ${error.message}`);
    process.exit(1);
  }
};

importProducts();
