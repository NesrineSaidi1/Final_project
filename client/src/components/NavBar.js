import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../JS/userSlice/userSlice";
import "../NavBar.css";

function NavBar() {
  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item
        </a>
      ),
    },
  ];

  const user = useSelector((state) => state.user?.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
          <Link className="left" to="">
            About
          </Link>
        </li>
        {user?.category == "user" ? (
          <>
            <li>
              {" "}
              <Link className="ysar" to="/profilUser">
                Profile
              </Link>
            </li>
            <button
              className="ymin"
              onClick={() => {
                dispatch(logout());
                navigate("/");
              }}
            >
              {" "}
              Logout
            </button>{" "}
          </>
        ) : user?.category == "entity" ? (
          <>
            <li>
              {" "}
              <Link className="ysar" to="/profilEntity">
                Entity
              </Link>
            </li>
            <button
              className="ymin"
              onClick={() => {
                dispatch(logout());
                navigate("/");
              }}
            >
              logout
            </button>{" "}
          </>
        ) : (
          <>
            <li className="log ">
              <Link className="ysar" to="/logi">
                Login
              </Link>
            </li>
            <li className="log ">
              <Link className="ymin" to="/register">
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default NavBar;
