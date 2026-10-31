import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Cart({ cart, setCart, closeCart }) {
  const navigate = useNavigate();

  const increase = (id) => {
    setCart(cart.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ));
  };

  const decrease = (id) => {
    setCart(cart
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0));
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );

  return (
    <div className="cart-overlay" onClick={closeCart}>
      <aside
        className="cart-panel"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="cart-header">
          <h2>Your Cart 🛒</h2>
          <button onClick={closeCart}>✕</button>
        </div>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <h3>{item.name}</h3>
                <p>Rs. {item.price}</p>

                <button onClick={() => decrease(item.id)}>
                  -
                </button>
                <span> {item.quantity} </span>
                <button onClick={() => increase(item.id)}>
                  +
                </button>

                <button onClick={() => removeItem(item.id)}>
                  Remove
                </button>
              </div>
            ))}

            <h2>Total: Rs. {total}</h2>
           
<button
  type="button"
  className="checkout-button"
  onClick={() => {
    closeCart();
    navigate("/checkout");
  }}
>
  Checkout
</button>

          </>
        )}
      </aside>
    </div>
  );
}

export default Cart;
