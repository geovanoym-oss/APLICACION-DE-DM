import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const openProduct = () => {
    navigate(`/producto/${product.id}`);
  };

  const addProductToCart = (event) => {
    event.stopPropagation();
    addToCart(product);
  };

  return (
    <article
      className="product-card clickable-product"
      onClick={openProduct}
      role="button"
      tabIndex="0"
      onKeyDown={(event) => {
        if (event.key === "Enter") openProduct();
      }}
    >
      <img src={product.image} alt={product.name} className="product-image" />

      <div className="product-content">
        <p className="product-brand">{product.brand}</p>
        <h3>{product.name}</h3>
        <p className="product-description">{product.description}</p>

        <div className="product-bottom">
          <strong>${product.price.toFixed(2)}</strong>

          <button type="button" onClick={addProductToCart}>
            Agregar
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
