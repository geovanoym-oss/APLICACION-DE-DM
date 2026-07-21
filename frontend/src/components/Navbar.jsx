import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");

  const submitSearch = (event) => {
    event.preventDefault();

    const text = search.trim();

    if (!text) {
      navigate("/catalogo");
    } else {
      navigate(`/catalogo?search=${encodeURIComponent(text)}`);
    }

    setSearchOpen(false);
    setSearch("");
  };

  return (
    <>
      <header className="mobile-header">
        <button
          type="button"
          className="header-icon"
          aria-label="Abrir menú"
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </button>

        <Link to="/" className="mobile-logo">
          <span className="logo-icon">🎮</span>
          <span>
            NOVA
            <b>GAMER</b>
          </span>
        </Link>

        <button
          type="button"
          className="header-icon"
          aria-label="Buscar productos"
          onClick={() => setSearchOpen(true)}
        >
          ⌕
        </button>
      </header>

      {menuOpen && (
        <div className="menu-overlay" onClick={() => setMenuOpen(false)}>
          <aside
            className="side-menu"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="side-menu-header">
              <span>NOVA GAMER</span>

              <button
                type="button"
                aria-label="Cerrar menú"
                onClick={() => setMenuOpen(false)}
              >
                ×
              </button>
            </div>

            <nav>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                ⌂ Inicio
              </Link>

              <Link to="/catalogo" onClick={() => setMenuOpen(false)}>
                ▦ Todos los productos
              </Link>

              <Link
                to="/catalogo?category=sillas"
                onClick={() => setMenuOpen(false)}
              >
                🪑 Sillas Gamer
              </Link>

              <Link
                to="/catalogo?category=monitores"
                onClick={() => setMenuOpen(false)}
              >
                🖥 Monitores
              </Link>

              <Link
                to="/catalogo?category=pcs-armadas"
                onClick={() => setMenuOpen(false)}
              >
                ⚡ PCs Armadas
              </Link>

              <Link
                to="/catalogo?category=componentes"
                onClick={() => setMenuOpen(false)}
              >
                ⚙ Componentes
              </Link>

              <Link
                to="/catalogo?category=teclados"
                onClick={() => setMenuOpen(false)}
              >
                ⌨ Teclados
              </Link>

              <Link
                to="/catalogo?category=mouse"
                onClick={() => setMenuOpen(false)}
              >
                🖱 Mouse
              </Link>

              <Link to="/carrito" onClick={() => setMenuOpen(false)}>
                🛒 Carrito
              </Link>

              <Link to="/login" onClick={() => setMenuOpen(false)}>
                ♙ Mi perfil
              </Link>
            </nav>
          </aside>
        </div>
      )}

      {searchOpen && (
        <div className="search-overlay">
          <form className="search-box" onSubmit={submitSearch}>
            <button
              type="button"
              className="close-search"
              onClick={() => setSearchOpen(false)}
            >
              ×
            </button>

            <p>BUSCAR PRODUCTO</p>

            <input
              autoFocus
              type="search"
              placeholder="Ejemplo: Razer, monitor, teclado..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />

            <button type="submit" className="btn btn-primary search-button">
              Buscar
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default Navbar;
