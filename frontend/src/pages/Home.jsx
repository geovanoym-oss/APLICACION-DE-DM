import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

const categories = [
  { name: "Sillas", icon: "🪑", filter: "sillas" },
  { name: "Monitores", icon: "🖥️", filter: "monitores" },
  { name: "PCs", icon: "🖥️", filter: "pcs-armadas" },
  { name: "Componentes", icon: "⚙️", filter: "componentes" },
];

const featuredProducts = [
  products[0],
  products[11],
  products[20],
  products[32],
];

function Home() {
  return (
    <div className="mobile-home">
      <section className="mobile-hero">
        <img
          src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=1200&q=85"
          alt="Setup gamer"
        />

        <div className="hero-overlay">
          <p>NEW ARRIVALS</p>
          <h1>
            ULTIMATE
            <br />
            GAMING
            <br />
            SETUP
          </h1>

          <Link to="/catalogo">Explorar ahora →</Link>
        </div>
      </section>

      <div className="slider-dots">
        <span className="active" />
        <span />
        <span />
        <span />
      </div>

      <section className="mobile-section">
        <div className="section-title-row">
          <h2>Categorías</h2>
          <Link to="/catalogo">Ver todo</Link>
        </div>

        <div className="category-scroll">
          {categories.map((category) => (
            <Link
              to="/catalogo"
              className="mobile-category-card"
              key={category.name}
            >
              <span>{category.icon}</span>
              <p>{category.name}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mobile-section featured-section">
        <div className="section-title-row">
          <h2>Productos destacados</h2>
          <Link to="/catalogo">Ver todo</Link>
        </div>

        <div className="featured-scroll">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="mobile-promo">
        <p>POWER UP</p>
        <h2>COMPONENTES PARA TU PRÓXIMO NIVEL</h2>
        <Link to="/catalogo">Comprar ahora</Link>
      </section>
    </div>
  );
}

export default Home;
