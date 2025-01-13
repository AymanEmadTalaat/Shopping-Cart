import "../../App.css";
import { useContext } from "react";
import { ShoppingCart } from "@mui/icons-material";
import { Person } from "@mui/icons-material";
import { OpenContext } from "./Layout";
import { NavLink } from "react-router";

function Header() {
  const { handleOpen, cart } = useContext(OpenContext);

  return (
    <header>
      <NavLink className="logo" to="/">
        Shopping Cart
      </NavLink>

      <div className="icons-container">
        <NavLink className="login-icon" to="profile">
          <Person />
        </NavLink>

        <button
          className="cart-btn"
          onClick={handleOpen}
          aria-label="Open cart button"
        >
          <ShoppingCart />

          {cart.length == 0 ? "" : <span>{cart.length}</span>}
        </button>
      </div>
    </header>
  );
}

export default Header;
