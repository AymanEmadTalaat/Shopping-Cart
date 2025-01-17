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

            <div>{products}</div>

            <h3>Total: ${productsTotal}</h3>
            <h3>Shipping: Free</h3>
          </div>

          <button>Continue to payment</button>
        </div>
      ) : (
        <h1 style={{ textAlign: "center" }}>Your cart is empty</h1>
      )}
    </div>
  );
}

export default Checkout;
