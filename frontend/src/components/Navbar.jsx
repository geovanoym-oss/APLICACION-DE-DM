import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="mobile-header">
      <button type="button" className="header-icon" aria-label="Abrir menú">
        ☰
      </button>

      <Link to="/" className="mobile-logo">
        <span className="logo-icon">🎮</span>
        <span>
          NOVA
          <b>GAMER</b>
        </span>
      </Link>

      <button type="button" className="header-icon" aria-label="Buscar">
        ⌕
      </button>
    </header>
  );
}

export default Navbar;
