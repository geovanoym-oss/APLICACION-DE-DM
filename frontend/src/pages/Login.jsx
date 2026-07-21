import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
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

    const users = JSON.parse(localStorage.getItem("novaGamerUsers")) || [];

    const user = users.find(
      (currentUser) =>
        currentUser.email === form.email &&
        currentUser.password === form.password,
    );

    if (!user) {
      setMessage("Correo o contraseña incorrectos.");
      return;
    }

    localStorage.setItem(
      "novaGamerSession",
      JSON.stringify({
        name: user.name,
        email: user.email,
      }),
    );

    navigate("/");
  };

  return (
    <section className="auth-page">
      <form className="auth-card" onSubmit={handleSubmit}>
        <p className="eyebrow">BIENVENIDO DE NUEVO</p>
        <h1>Iniciar sesión</h1>
        <p className="auth-subtitle">
          Accede a tu cuenta y continúa mejorando tu setup.
        </p>

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
            placeholder="Tu contraseña"
            value={form.password}
            onChange={handleChange}
            required
          />
        </label>

        {message && <p className="form-message error">{message}</p>}

        <button type="submit" className="btn btn-primary auth-button">
          Entrar a mi cuenta
        </button>

        <p className="auth-switch">
          ¿No tienes cuenta? <Link to="/registro">Regístrate</Link>
        </p>
      </form>
    </section>
  );
}

export default Login;
