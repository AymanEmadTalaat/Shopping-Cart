import { useContext } from "react";
import "../../App.css";
import { userSignup } from "../api";
import { Link, useLocation, useNavigate } from "react-router";
import { OpenContext } from "../Layout/Layout";

function SignUp() {
  const { form, handleForm } = useContext(OpenContext);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  function handleLogin(e) {
    e.preventDefault();

    userSignup(
      form.email,
      form.username,
      form.password,
      form.firstname,
      form.lastname
    )
      .then((data) => {
        data?.id && localStorage.setItem("loggedin", true);
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err));
  }

  return (
    <form onSubmit={handleLogin}>
      <h1>Sign up</h1>

      <label>
        Email*
        <input
          type="email"
          name="email"
          onChange={handleForm}
          placeholder="John@gmail.com"
        />
      </label>

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

      <div className="name-container">
        <label>
          FirstName*
          <input
            type="text"
            name="firstname"
            onChange={handleForm}
            placeholder="John"
          />
        </label>

        <label>
          LastName*
          <input
            type="text"
            name="lastname"
            onChange={handleForm}
            placeholder="Doe"
          />
        </label>
      </div>

      <button type="submit">Sign up</button>

      <Link to="/login">Already have an account? Login</Link>
    </form>
  );
}

export default SignUp;
