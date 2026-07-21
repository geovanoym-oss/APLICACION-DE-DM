import { Navigate, useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const savedUser = localStorage.getItem("user");

  if (!savedUser) {
    return <Navigate to="/login" replace />;
  }

  const user = JSON.parse(savedUser);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <main className="auth-page">
      <section className="auth-card">
        <p className="eyebrow">MI TIENDA GAMER</p>
        <h1>Mi perfil</h1>

        <p>Sesión iniciada como:</p>

        <div className="profile-data">
          <strong>{user.name}</strong>
          <span>{user.email}</span>
        </div>

        <button
          type="button"
          className="primary-button logout-button"
          onClick={handleLogout}
        >
          Cerrar sesión
        </button>
      </section>
    </main>
  );
}
