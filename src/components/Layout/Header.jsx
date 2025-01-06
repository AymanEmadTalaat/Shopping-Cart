import "../../App.css";
import { useContext } from "react";
import { ShoppingCart } from "@mui/icons-material";
import { OpenContext } from "./Layout";

function Header() {
  const { handleOpen, cart } = useContext(OpenContext);

  return (
    <header>
      <h1>Shopping Cart</h1>

      <button
        className="cart-btn"
        onClick={handleOpen}
        aria-label="Open cart button"
      >
        <ShoppingCart />
      </button>

      {cart.length == 0 ? "" : <span>{cart.length}</span>}
    </header>
  );
}

export default Header;
