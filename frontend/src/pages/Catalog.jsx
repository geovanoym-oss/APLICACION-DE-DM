import { useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

const filters = [
  { value: "todos", label: "Todos" },
  { value: "sillas", label: "Sillas" },
  { value: "monitores", label: "Monitores" },
  { value: "pcs-armadas", label: "PCs Armadas" },
  { value: "componentes", label: "Componentes" },
];

const titles = {
  sillas: "Sillas Gamer",
  monitores: "Monitores Gaming",
  "pcs-armadas": "PCs Armadas",
  componentes: "Componentes y Procesadores",
};

function Catalog() {
  const [category, setCategory] = useState("todos");

  const filteredProducts = useMemo(() => {
    if (category === "todos") return products;
    return products.filter((product) => product.category === category);
  }, [category]);

  return (
    <section className="catalog-page">
      <div className="catalog-header">
        <p className="eyebrow">ARSENAL GAMER</p>
        <h1>Catálogo de productos</h1>
        <p>
          Explora nuestro inventario de tecnología seleccionada para tu setup.
        </p>
      </div>

      <div className="catalog-filters">
        {filters.map((filter) => (
          <button
            type="button"
            key={filter.value}
            className={category === filter.value ? "active" : ""}
            onClick={() => setCategory(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {category === "todos" ? (
        Object.keys(titles).map((currentCategory) => {
          const categoryProducts = products.filter(
            (product) => product.category === currentCategory,
          );

          return (
            <div className="catalog-section" key={currentCategory}>
              <h2>{titles[currentCategory]}</h2>

              <div className="product-grid">
                {categoryProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          );
        })
      ) : (
        <div className="catalog-section">
          <h2>{titles[category]}</h2>

          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default Catalog;
