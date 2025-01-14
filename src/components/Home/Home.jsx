import "../../App.css";
import { useContext, useState } from "react";
import { useSearchParams, NavLink } from "react-router";
import data from "../../components/data.js";
import { OpenContext } from "../Layout/Layout.jsx";

function Home() {
  const { addToCart, cart } = useContext(OpenContext);
  const [search, setSearch] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.get("title");
  const productsData = data;

  function handleSearch(e) {
    const { value } = e.target;

    setSearch(value);
  }

  const filteredProducts =
    typeFilter && search !== ""
      ? productsData.filter((product) =>
          product.title.toLowerCase().includes(typeFilter)
        )
      : productsData;

  const products = filteredProducts.map((product) => {
    return (
      <div className="product-container" key={product.id}>
        <NavLink to={`${product.id}`}>
          <img width="300px" height="150px" src={product.img} alt="" />

          <ul>
            <li>{product.title}</li>
            <li>Price: ${product.newPrice}</li>
          </ul>
        </NavLink>

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
    );
  });

  return (
    <>
      <h1>Listed Products</h1>
      <label>
        <input
          type="search"
          name="search"
          onChange={handleSearch}
          onInput={() => setSearchParams({ title: search })}
          placeholder="Enter a product*"
        />
      </label>
      {products}
    </>
  );
}

export default Home;
