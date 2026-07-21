import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";

function BottomNav() {
  const location = useLocation();
  const { totalItems } = useCart();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bottom-nav">
      <Link to="/" className={isActive("/") ? "active" : ""}>
        <span>⌂</span>
        Inicio
      </Link>

      <Link to="/catalogo" className={isActive("/catalogo") ? "active" : ""}>
        <span>▦</span>
        Productos
      </Link>

      <Link to="/catalogo" className="bottom-category">
        <span>☷</span>
        Categorías
      </Link>

      <Link to="/carrito" className={isActive("/carrito") ? "active" : ""}>
        <span className="cart-bottom-icon">
          🛒
          {totalItems > 0 && <b>{totalItems}</b>}
        </span>
        Carrito
      </Link>

      <Link to="/login" className={isActive("/login") ? "active" : ""}>
        <span>♙</span>
        Perfil
      </Link>
    </nav>
  );
}

export default BottomNav;
