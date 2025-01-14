import "../../App.css";
import { useContext } from "react";
import { NavLink } from "react-router";
import { OpenContext } from "./Layout";

function Checkout() {
  const { cart, productsTotal } = useContext(OpenContext);

  const products = cart.map((product) => {
    return (
      <div className="product-checkout" key={product.id}>
        <ul>
          <li>{product.title}</li>
          <li>${product.newPrice} </li>
          <li>Quantity: {product.quantity}</li>
        </ul>

        <img src={product.img} alt={product.title} />
      </div>
    );
  });

  return (
    <div className="checkout-container">
      <NavLink to="..">Go back to Homepage</NavLink>

      {productsTotal > 0 ? (
        <div className="checkout-section">
          <div className="order-summary">
            <h1>Order summary</h1>
            <h2>Total: ${productsTotal}</h2>

            {products}

            <h3>Shipping: Free</h3>
          </div>

          <div className="submit-order">
            <button>Continue to payment</button>
          </div>
        </div>
      ) : (
        <h1 style={{ textAlign: "center" }}>Your cart is empty</h1>
      )}
    </div>
  );
}

export default Checkout;
