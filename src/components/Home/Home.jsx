import "../../App.css";
import { useContext, useState } from "react";
import { useSearchParams, NavLink } from "react-router";
import data from "../../components/data.js";
import { OpenContext } from "../Layout/Layout.jsx";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function Home() {
  const [page, setPage] = useState(1);
  const dataPerPage = 6;

  const indexOfLast = page * dataPerPage;
  const indexOfFirst = indexOfLast - dataPerPage;

  const { addToCart, cart } = useContext(OpenContext);
  const [search, setSearch] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.get("title");
  const productsData = data;

  function handleChangePage(e, newPage) {
    setPage(newPage);
  }

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

  const products = filteredProducts
    .slice(indexOfFirst, indexOfLast)
    .map((product) => {
      return (
        <div className="products-container" key={product.id}>
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
    <div className="home-container">
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

      <Stack className="pagination" spacing={2}>
        <Pagination
          page={page}
          count={
            search
              ? +(products.length / dataPerPage).toFixed()
              : +(data.length / dataPerPage).toFixed()
          }
          variant="outlined"
          shape="rounded"
          onChange={handleChangePage}
        />
      </Stack>
    </div>
  );
}

export default Home;
