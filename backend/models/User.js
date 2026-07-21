const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "El nombre es obligatorio"], trim: true, minlength: 2 },
    email: { type: String, required: [true, "El correo es obligatorio"], unique: true, lowercase: true, trim: true, match: [/^\S+@\S+\.\S+$/, "Ingresa un correo válido"] },
    password: { type: String, required: [true, "La contraseña es obligatoria"], minlength: 6, select: false },
    role: { type: String, enum: ["user", "admin"], default: "user" },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, await bcrypt.genSalt(10));
  next();
});

userSchema.methods.comparePassword = function (enteredPassword) {
  return bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
