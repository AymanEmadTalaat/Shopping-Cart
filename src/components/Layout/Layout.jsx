import "../../App.css";
import { useState, createContext } from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import Cart from "./Cart";

const OpenContext = createContext();

function Layout() {
  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [productsTotal, setProductsTotal] = useState(0);

  const [form, setForm] = useState({
    email: "John@gmail.com",
    username: "johnd",
    password: "m38rmF$",
    firstname: "John",
    lastname: "Doe",
  });

  function handleForm(e) {
    const { name, value } = e.currentTarget;

    setForm({
      ...form,
      [name]: value,
    });
  }

  function addToCart(product) {
    const alreadyCourses = cart.find((item) => item.id === product.id);

    if (alreadyCourses) {
      setCart([...cart]);
    } else {
      setCart([...cart, product]);
    }
  }

  function removeFromCart(index) {
    setCart((oldValues) => {
      return oldValues.filter((_, i) => i !== index);
    });
  }

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <OpenContext.Provider
      value={{
        open,
        handleOpen,
        cart,
        addToCart,
        setCart,
        removeFromCart,
        form,
        handleForm,
        productsTotal,
        setProductsTotal,
        handleClose,
      }}
    >
      <Header />
      <Cart />

      <Outlet />
    </OpenContext.Provider>
  );
}

export default Layout;
export { OpenContext };
