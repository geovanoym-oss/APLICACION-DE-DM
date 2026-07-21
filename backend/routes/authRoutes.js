const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// Genera el token que el frontend guardará después del login.
const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

// POST /api/auth/register
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Nombre, correo y contraseña son obligatorios.",
      });
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(409).json({
        message: "Ya existe una cuenta registrada con este correo.",
      });
    }

    // El modelo User encripta automáticamente la contraseña antes de guardar.
    const user = await User.create({
      name,
      email,
      password,
    });

    res.status(201).json({
      message: "Usuario registrado correctamente.",
      token: generateToken(user._id),
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "No fue posible registrar el usuario.",
      error: error.message,
    });
  }
});

// POST /api/auth/login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Correo y contraseña son obligatorios.",
      });
    }

    // select("+password") es necesario porque el modelo no devuelve password por defecto.
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(401).json({
        message: "Correo o contraseña incorrectos.",
      });
    }

    const passwordIsCorrect = await user.comparePassword(password);

    if (!passwordIsCorrect) {
      return res.status(401).json({
        message: "Correo o contraseña incorrectos.",
      });
    }

    res.json({
      message: "Inicio de sesión correcto.",
      token: generateToken(user._id),
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "No fue posible iniciar sesión.",
      error: error.message,
    });
  }
});

module.exports = router;
