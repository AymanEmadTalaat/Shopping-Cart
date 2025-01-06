import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import { Loader } from "./components/Home/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        index
        element={<Home />}
        loader={Loader}
        errorElement={
          <pre style={{ textAlign: "center", fontSize: "2rem" }}>
            There was an error
          </pre>
        }
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
