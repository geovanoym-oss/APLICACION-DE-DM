import { Link } from "react-router-dom";

const categories = [
  {
    title: "Sillas Gamer",
    description: "Comodidad y ergonomía para dominar cada partida.",
    emoji: "🪑",
    className: "cyan",
  },
  {
    title: "Monitores",
    description: "Alta frecuencia, respuesta ultrarrápida e imagen inmersiva.",
    emoji: "🖥️",
    className: "orange",
  },
  {
    title: "PCs Armadas",
    description: "Potencia lista para jugar, crear y transmitir.",
    emoji: "⚡",
    className: "cyan",
  },
  {
    title: "Componentes",
    description: "Actualiza tu setup con hardware de alto rendimiento.",
    emoji: "🔧",
    className: "orange",
  },
];

function Home() {
  return (
    <>
      <section id="inicio" className="hero">
        <div className="hero-content">
          <p className="eyebrow">LEVEL UP YOUR SETUP</p>

          <h1>
            EL PODER DE JUGAR
            <span> SIN LÍMITES</span>
          </h1>

          <p className="hero-text">
            Descubre tecnología gamer, componentes de alto rendimiento y los
            mejores accesorios para construir tu setup definitivo.
          </p>

          <Link to="/catalogo" className="btn btn-primary">
            Explorar catálogo
          </Link>
        </div>

        <div className="hero-decoration">
          <div className="neon-orb orb-cyan" />
          <div className="neon-orb orb-orange" />
          <span>GAME</span>
        </div>
      </section>

      <section id="categorias" className="categories-section">
        <div className="section-heading">
          <p className="eyebrow">EQUIPA TU SETUP</p>
          <h2>Categorías principales</h2>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <Link
              key={category.title}
              to="/catalogo"
              className={`category-card ${category.className}`}
            >
              <span className="category-icon">{category.emoji}</span>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              <span className="category-link">Ver productos →</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
