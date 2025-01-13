import "../../App.css";
import { useState, createContext } from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import Cart from "./Cart";

const OpenContext = createContext();

function Layout() {
  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState([]);

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
    setOpen(!open);
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
      }}
    >
      <Header />
      <Cart />

      <main>
        <Outlet />
      </main>
    </OpenContext.Provider>
  );
}

export default Layout;
export { OpenContext };
