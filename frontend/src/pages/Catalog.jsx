import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

const filters = [
  { value: "todos", label: "Todos" },
  { value: "sillas", label: "Sillas" },
  { value: "monitores", label: "Monitores" },
  { value: "pcs-armadas", label: "PCs Armadas" },
  { value: "componentes", label: "Componentes" },
  { value: "teclados", label: "Teclados" },
  { value: "mouse", label: "Mouse" },
];

const titles = {
  sillas: "Sillas Gamer",
  monitores: "Monitores Gaming",
  "pcs-armadas": "PCs Armadas",
  componentes: "Componentes",
  teclados: "Teclados Gamer",
  mouse: "Mouse Gamer",
};

function Catalog() {
  const [searchParams, setSearchParams] = useSearchParams();

  const categoryFromUrl = searchParams.get("category") || "todos";
  const [category, setCategory] = useState(categoryFromUrl);

  useEffect(() => {
    setCategory(categoryFromUrl);
  }, [categoryFromUrl]);

  const filteredProducts = useMemo(() => {
    if (category === "todos") {
      return products;
    }

    return products.filter((product) => product.category === category);
  }, [category]);

  const changeCategory = (newCategory) => {
    setCategory(newCategory);

    if (newCategory === "todos") {
      setSearchParams({});
      return;
    }

    setSearchParams({ category: newCategory });
  };

  return (
    <section className="catalog-page">
      <div className="catalog-header">
        <p className="eyebrow">ARSENAL GAMER</p>
        <h1>
          {category === "todos" ? "Todos los productos" : titles[category]}
        </h1>

        <p>Explora productos gamer para crear el setup que siempre quisiste.</p>
      </div>

      <div className="catalog-filters">
        {filters.map((filter) => (
          <button
            type="button"
            key={filter.value}
            className={category === filter.value ? "active" : ""}
            onClick={() => changeCategory(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default Catalog;
