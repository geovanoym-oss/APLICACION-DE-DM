import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (form.password.length < 6) {
      setMessage("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("novaGamerUsers")) || [];
    const exists = users.some((user) => user.email === form.email);

    if (exists) {
      setMessage("Ya existe una cuenta con este correo.");
      return;
    }

    // Temporal: después se reemplazará por una petición al backend.
    users.push(form);
    localStorage.setItem("novaGamerUsers", JSON.stringify(users));
    localStorage.setItem(
      "novaGamerSession",
      JSON.stringify({ name: form.name, email: form.email }),
    );

    navigate("/");
  };

  return (
    <section className="auth-page">
      <form className="auth-card" onSubmit={handleSubmit}>
        <p className="eyebrow">ÚNETE AL EQUIPO</p>
        <h1>Crear cuenta</h1>
        <p className="auth-subtitle">
          Regístrate para guardar tus productos favoritos.
        </p>

        <label>
          Nombre completo
          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            value={form.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Correo electrónico
          <input
            type="email"
            name="email"
            placeholder="correo@ejemplo.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Contraseña
          <input
            type="password"
            name="password"
            placeholder="Mínimo 6 caracteres"
            value={form.password}
            onChange={handleChange}
            required
          />
        </label>

        {message && <p className="form-message error">{message}</p>}

        <button type="submit" className="btn btn-primary auth-button">
          Crear mi cuenta
        </button>

        <p className="auth-switch">
          ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
        </p>
      </form>
    </section>
  );
}

export default Register;
