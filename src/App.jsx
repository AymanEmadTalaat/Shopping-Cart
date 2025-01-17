import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router";
import Layout from "./components/Layout/Layout";
import Profile from "./components/Profile/Profile";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import AuthRequired from "./components/AuthRequired";
import Checkout from "./components/Layout/Checkout";

import { BounceLoader } from "react-spinners";
import { lazy, Suspense } from "react";

const Home = lazy(() => {
  return import("./components/Home/Home");
});

const Product = lazy(() => {
  return import("./components/Home/Product");
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        index
        element={
          <Suspense
            fallback={
              <BounceLoader
                color="#302b63"
                cssOverride={{ marginInline: "auto", marginTop: "12rem" }}
              />
            }
          >
            <Home />
          </Suspense>
        }
      />
      <Route
        path="/:id"
        element={
          <Suspense
            fallback={
              <BounceLoader
                color="#302b63"
                cssOverride={{ marginInline: "auto", marginTop: "12rem" }}
              />
            }
          >
            <Product />
          </Suspense>
        }
      />

      <Route element={<AuthRequired />}>
        <Route path="profile" element={<Profile />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>

      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
