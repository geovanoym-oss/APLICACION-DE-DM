import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=1200&q=85",
    eyebrow: "NEW ARRIVALS",
    title: "ULTIMATE GAMING SETUP",
    link: "/catalogo?category=pcs-armadas",
  },
  {
    image:
      "https://images.unsplash.com/photo-1541140532154-b024d705b90a?auto=format&fit=crop&w=1200&q=85",
    eyebrow: "PLAY WITHOUT LIMITS",
    title: "TECLADOS Y MOUSE GAMER",
    link: "/catalogo?category=teclados",
  },
  {
    image:
      "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=1200&q=85",
    eyebrow: "UPGRADE YOUR RIG",
    title: "COMPONENTES DE ALTO NIVEL",
    link: "/catalogo?category=componentes",
  },
];

const categories = [
  {
    name: "Sillas",
    image:
      "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=400&q=85",
    filter: "sillas",
  },
  {
    name: "Monitores",
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=400&q=85",
    filter: "monitores",
  },
  {
    name: "PCs",
    image:
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=400&q=85",
    filter: "pcs-armadas",
  },
  {
    name: "Componentes",
    image:
      "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=400&q=85",
    filter: "componentes",
  },
  {
    name: "Teclados",
    image:
      "https://images.unsplash.com/photo-1541140532154-b024d705b90a?auto=format&fit=crop&w=400&q=85",
    filter: "teclados",
  },
  {
    name: "Mouse",
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=400&q=85",
    filter: "mouse",
  },
];

const featuredProducts = [
  products[0],
  products[11],
  products[20],
  products[40],
  products[50],
];

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((current) => (current + 1) % slides.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const previousSlide = () => {
    setCurrentSlide((current) =>
      current === 0 ? slides.length - 1 : current - 1,
    );
  };

  const nextSlide = () => {
    setCurrentSlide((current) => (current + 1) % slides.length);
  };

  const slide = slides[currentSlide];

  return (
    <div className="mobile-home">
      <section className="mobile-carousel">
        <img src={slide.image} alt={slide.title} />

        <div className="carousel-overlay">
          <p>{slide.eyebrow}</p>
          <h1>{slide.title}</h1>

          <Link to={slide.link}>Explorar ahora →</Link>
        </div>

        <button
          type="button"
          className="carousel-control previous"
          onClick={previousSlide}
          aria-label="Promoción anterior"
        >
          ‹
        </button>

        <button
          type="button"
          className="carousel-control next"
          onClick={nextSlide}
          aria-label="Promoción siguiente"
        >
          ›
        </button>
      </section>

      <div className="slider-dots">
        {slides.map((_, index) => (
          <button
            type="button"
            key={index}
            className={index === currentSlide ? "active" : ""}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Ir a promoción ${index + 1}`}
          />
        ))}
      </div>

      <section className="mobile-section">
        <div className="section-title-row">
          <h2>Categorías</h2>

          {/* Solo este botón abre todos los productos. */}
          <Link to="/catalogo">Ver todo</Link>
        </div>

        <div className="category-scroll">
          {categories.map((category) => (
            <Link
              to={`/catalogo?category=${category.filter}`}
              className="mobile-category-card"
              key={category.filter}
            >
              <img src={category.image} alt={category.name} />
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
    </div>
  );
}

export default Home;
