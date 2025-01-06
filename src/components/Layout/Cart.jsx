import "../../App.css";
import { useContext, useEffect, useState } from "react";
import Drawer from "@mui/joy/Drawer";
import { Close } from "@mui/icons-material";
import { Add } from "@mui/icons-material";
import { Remove } from "@mui/icons-material";
import { OpenContext } from "./Layout";

function Cart() {
  const { open, handleOpen, cart, setCart, removeFromCart } =
    useContext(OpenContext);
  const [productsTotal, setProductsTotal] = useState(0);

  useEffect(() => {
    function handleProductsTotal() {
      let totalVal = 0;
      for (let i = 0; i < cart.length; i++) {
        totalVal += parseInt(cart[i].newPrice * cart[i].quantity);
      }
      setProductsTotal(totalVal);
    }

    handleProductsTotal();
  }, [cart]);

  const products = cart.map((product, index) => {
    return (
      <div className="cart-container" key={product.id}>
        <ul>
          <li>{product.title}</li>
          <li>${product.newPrice} </li>

          <li className="productCount">
            <Add
              sx={{
                border: "1px solid black",
                borderRadius: "15px",
                cursor: "pointer",
              }}
              onClick={() => {
                setCart((prev) => {
                  const updatedCart = prev.map((item) =>
                    item.id === product.id
                      ? { ...item, quantity: product.quantity + 1 }
                      : item
                  );

                  return updatedCart;
                });
              }}
            />{" "}
            {product.quantity}
            <Remove
              sx={{
                border: "1px solid black",
                borderRadius: "15px",
                cursor: "pointer",
              }}
              onClick={() => {
                if (product.quantity == 1) {
                  removeFromCart(index);
                } else {
                  setCart((prev) => {
                    const updatedCart = prev.map((item) =>
                      item.id === product.id
                        ? { ...item, quantity: product.quantity - 1 }
                        : item
                    );

                    return updatedCart;
                  });
                }
              }}
            />
          </li>
        </ul>

        <img src={product.img} alt={product.title} />
      </div>
    );
  });

  return (
    <>
      <Drawer open={open} anchor="right" className="carts-container">
        <button
          className="closeCart-btn"
          onClick={handleOpen}
          aria-label="Close cart button"
        >
          <Close />
        </button>

        {cart.length == 0 ? <h1>Your basket is empty</h1> : products}

        <p>Total: ${productsTotal}</p>

        <button onClick={() => setCart([])} className="empty-cart-btn">
          Empty your basket
        </button>
      </Drawer>
    </>
  );
}

export default Cart;
