import { useContext } from "react";
import "../../App.css";
import userLogin from "../api";
import { Link, useLocation, useNavigate } from "react-router";
import { OpenContext } from "../Layout/Layout";

function Login() {
  const { form, handleForm } = useContext(OpenContext);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  function handleLogin(e) {
    e.preventDefault();

    userLogin(form.username, form.password)
      .then((data) => {
        data?.token && localStorage.setItem("loggedin", true);
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err));
  }

  return (
    <form onSubmit={handleLogin}>
      <h1>Sign in</h1>

      <label>
        UserName*
        <input
          type="text"
          name="username"
          onChange={handleForm}
          placeholder="johnd"
        />
      </label>

      <label>
        Password*
        <input
          type="password"
          name="password"
          onChange={handleForm}
          placeholder="m38rmF$"
        />
      </label>

      <button type="submit">Login</button>

      <Link to="/signup">Don&apos;t have an account? Sign up</Link>
    </form>
  );
}

export default Login;
