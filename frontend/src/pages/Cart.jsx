import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, totalPrice, changeQuantity, removeFromCart, clearCart } =
    useCart();

  if (cart.length === 0) {
    return (
      <section className="cart-page empty-cart">
        <p className="eyebrow">TU CARRITO</p>
        <h1>Tu carrito está vacío</h1>
        <p>Explora el catálogo y agrega productos para tu setup gamer.</p>
        <Link to="/catalogo" className="btn btn-primary">
          Ir al catálogo
        </Link>
      </section>
    );
  }

  return (
    <section className="cart-page">
      <div className="cart-header">
        <div>
          <p className="eyebrow">TU CARRITO</p>
          <h1>Productos seleccionados</h1>
        </div>

        <button type="button" className="clear-cart" onClick={clearCart}>
          Vaciar carrito
        </button>
      </div>

      <div className="cart-layout">
        <div className="cart-items">
          {cart.map((item) => (
            <article className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />

              <div className="cart-item-info">
                <p>{item.brand}</p>
                <h2>{item.name}</h2>
                <strong>${item.price.toFixed(2)}</strong>
              </div>

              <div className="quantity-controls">
                <button
                  type="button"
                  onClick={() => changeQuantity(item.id, -1)}
                >
                  −
                </button>

                <span>{item.quantity}</span>

                <button
                  type="button"
                  onClick={() => changeQuantity(item.id, 1)}
                >
                  +
                </button>
              </div>

              <button
                type="button"
                className="remove-item"
                onClick={() => removeFromCart(item.id)}
              >
                Eliminar
              </button>
            </article>
          ))}
        </div>

        <aside className="cart-summary">
          <h2>Resumen de compra</h2>

          <div>
            <span>Total</span>
            <strong>${totalPrice.toFixed(2)}</strong>
          </div>

          <button type="button" className="btn btn-primary checkout-button">
            Proceder al pago
          </button>

          <p>Pago seguro próximamente.</p>
        </aside>
      </div>
    </section>
  );
}

export default Cart;
