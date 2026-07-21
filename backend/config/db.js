const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB conectado: ${connection.connection.host}`);
  } catch (error) {
    console.error(`Error al conectar MongoDB: ${error.message}`);

    // Detiene el servidor si no existe conexión con la base de datos.
    process.exit(1);
  }
};

module.exports = connectDB;
