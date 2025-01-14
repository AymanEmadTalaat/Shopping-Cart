import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Product from "./components/Home/Product";
import Profile from "./components/Profile/Profile";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import AuthRequired from "./components/AuthRequired";
import Checkout from "./components/Layout/Checkout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route element={<AuthRequired />}>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Product />} />

        <Route path="profile" element={<Profile />} />
      </Route>

      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="checkout" element={<Checkout />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
