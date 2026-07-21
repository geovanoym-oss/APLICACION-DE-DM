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
  const searchFromUrl = searchParams.get("search") || "";

  const [category, setCategory] = useState(categoryFromUrl);

  useEffect(() => {
    setCategory(categoryFromUrl);
  }, [categoryFromUrl]);

  const filteredProducts = useMemo(() => {
    let result = products;

    if (category !== "todos") {
      result = result.filter((product) => product.category === category);
    }

    if (searchFromUrl) {
      const text = searchFromUrl.toLowerCase();

      result = result.filter((product) => {
        return (
          product.name.toLowerCase().includes(text) ||
          product.brand.toLowerCase().includes(text) ||
          product.category.toLowerCase().includes(text)
        );
      });
    }

    return result;
  }, [category, searchFromUrl]);

  const changeCategory = (newCategory) => {
    setCategory(newCategory);

    if (newCategory === "todos") {
      setSearchParams({});
    } else {
      setSearchParams({ category: newCategory });
    }
  };

  const pageTitle = searchFromUrl
    ? `Resultados para: ${searchFromUrl}`
    : category === "todos"
      ? "Todos los productos"
      : titles[category];

  return (
    <section className="catalog-page">
      <div className="catalog-header">
        <p className="eyebrow">ARSENAL GAMER</p>
        <h1>{pageTitle}</h1>

        <p>
          {filteredProducts.length} producto
          {filteredProducts.length !== 1 ? "s encontrados" : " encontrado"}
        </p>
      </div>

      {!searchFromUrl && (
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
      )}

      {filteredProducts.length > 0 ? (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="no-results">
          <h2>No encontramos productos</h2>
          <p>Prueba buscando otra marca o categoría.</p>
        </div>
      )}
    </section>
  );
}

export default Catalog;
