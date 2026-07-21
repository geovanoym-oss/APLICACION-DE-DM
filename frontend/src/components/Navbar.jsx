import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { totalItems } = useCart();

  return (
    <header className="navbar">
      <Link to="/" className="logo">
        NOVA<span>GAMER</span>
      </Link>

      <nav className="nav-links">
        <Link to="/">Inicio</Link>
        <Link to="/catalogo">Catálogo</Link>

        <Link to="/carrito" className="cart-link">
          Carrito <span>{totalItems}</span>
        </Link>

        <Link to="/login" className="nav-login">
          Iniciar sesión
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
