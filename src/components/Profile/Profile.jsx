import { useContext } from "react";
import "../../App.css";
import { OpenContext } from "../Layout/Layout";

function Profile() {
  const { form } = useContext(OpenContext);

  function logout() {
    localStorage.removeItem("loggedin");
  }

  return (
    <div className="profile-container">
      <h1>Profile</h1>

      {form && (
        <>
          <h3>Email: {form.email}</h3>
          <h3>Username: {form.username}</h3>
          <h3>Password: {form.password}</h3>
          <h3>Firstname: {form.firstname}</h3>
          <h3>Lastname: {form.lastname}</h3>
        </>
      )}

      <button type="submit" onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default Profile;
