import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <article className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />

      <div className="product-content">
        <p className="product-brand">{product.brand}</p>
        <h3>{product.name}</h3>
        <p className="product-description">{product.description}</p>

        <div className="product-bottom">
          <strong>${product.price.toFixed(2)}</strong>

          <button type="button" onClick={() => addToCart(product)}>
            Agregar
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
