import { Link, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import products from "../data/products";

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <section className="product-detail-page not-found">
        <h1>Producto no encontrado</h1>
        <Link to="/catalogo" className="btn btn-primary">
          Volver al catálogo
        </Link>
      </section>
    );
  }

  const hasSpecifications =
    Object.keys(product.specifications || {}).length > 0;

  return (
    <section className="product-detail-page">
      <Link to="/catalogo" className="back-link">
        ← Volver al catálogo
      </Link>

      <div className="product-detail-card">
        <div className="product-detail-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-detail-info">
          <p className="detail-brand">{product.brand}</p>
          <h1>{product.name}</h1>
          <p className="detail-category">
            Categoría: {product.category.replace("-", " ")}
          </p>

          <p className="detail-description">{product.description}</p>

          <strong className="detail-price">${product.price.toFixed(2)}</strong>

          <button
            type="button"
            className="btn btn-primary detail-cart-button"
            onClick={() => addToCart(product)}
          >
            Agregar al carrito
          </button>
        </div>
      </div>

      {hasSpecifications && (
        <section className="specifications-box">
          <h2>Especificaciones técnicas</h2>

          <div className="specifications-list">
            {Object.entries(product.specifications).map(([name, value]) => (
              <div className="specification-row" key={name}>
                <span>{name}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </section>
      )}
    </section>
  );
}

export default ProductDetail;
