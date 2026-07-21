require("dotenv").config();

const mongoose = require("mongoose");
const connectDB = require("../config/db");
const Product = require("../models/Product");
const products = require("./seedProducts");

const importProducts = async () => {
  try {
    // Espera a que MongoDB esté conectado antes de usar Product.
    await connectDB();

    // Elimina solamente los productos anteriores.
    await Product.deleteMany({});

    // Inserta los productos de seedProducts.js.
    await Product.insertMany(products);

    console.log("✅ Se cargaron los productos correctamente.");

    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error(`❌ Error al cargar productos: ${error.message}`);

    await mongoose.connection.close();
    process.exit(1);
  }
};

importProducts();
