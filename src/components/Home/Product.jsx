import "../../App.css";
import { useContext } from "react";
import { OpenContext } from "../Layout/Layout";
import { NavLink, useParams } from "react-router";
import data from "../data";

function Product() {
  const { addToCart, cart } = useContext(OpenContext);
  const param = useParams();
  const product = data[param.id - 1];

  const productData = (
    <div className="product-container">
      <NavLink to=".." className="product-link">
        Go back to all products
      </NavLink>

      <div className="product">
        <img width="300px" height="150px" src={product.img} alt="" />

        <ul>
          <li>{product.title}</li>
          <li>Price: ${product.newPrice}</li>
        </ul>

        <button
          disabled={cart.find((item) => item.id === product.id)}
          style={{
            cursor:
              cart.find((item) => item.id === product.id) && "not-allowed",
          }}
          onClick={() => addToCart(product)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );

  return <>{productData}</>;
}

export default Product;
