import React from "react";
import { Link } from "react-router-dom";
import "../NavBar.css";
function NavBar() {
  const isAuth = localStorage.getItem("token");
  return (
    <div className="nav">
      <img src="https://internme.app/public/assets/img/logo_blue.svg" alt="" />
      <ul>
        <li>
          <Link className="left" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="left" to="/explore">
            Explore
          </Link>
        </li>
        <li>
          <Link className="left" to="/contact">
            Contact
          </Link>{" "}
        </li>
        <li>
          <Link className="left" to="/about">
            About
          </Link>
        </li>

        <li className="log ">
          {" "}
          <Link className="ysar" to="logi">
            Login
          </Link>{" "}
        </li>
        <li className="log ">
          <Link className="ymin" to="/register">
            Register
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
