require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Conecta con MongoDB antes de levantar el servidor.
connectDB();

// Permite que el frontend React haga peticiones al backend.
app.use(cors());

// Permite recibir datos JSON enviados desde formularios.
app.use(express.json());

// Ruta de verificación rápida.
app.get("/", (req, res) => {
  res.json({
    message: "API de Mi Tienda Gamer funcionando correctamente.",
  });
});

// Rutas principales de la API.
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
