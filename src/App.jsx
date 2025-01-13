import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router";
import Layout from "./components/Layout/Layout";
import Home, { Loader as homeLoader } from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import AuthRequired from "./components/AuthRequired";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route element={<AuthRequired />}>
        <Route
          path="/"
          element={<Home />}
          loader={homeLoader}
          errorElement={
            <pre style={{ textAlign: "center", fontSize: "2rem" }}>
              There was an error
            </pre>
          }
        />

        <Route path="profile" element={<Profile />} />
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
