import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userCurrent, userlogi } from "../JS/userSlice/userSlice";

function Logi() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = localStorage.getItem("token");
  const userid = useSelector((state) => state?.user?.user?._id);
  console.log(userid);
  const [logi, setlogi] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    dispatch(userCurrent());
  }, [userid]);
  return (
    <div>
      {isAuth ? (
        navigate("/profil")
      ) : (
        <div className="wrapper">
          <form onSubmit={(e) => e.preventDefault()} className="form-signin">
            <h4 className="form-signin-heading">
              Enter Your Details To Log In
            </h4>
            <input
              type="text"
              class="form-control"
              name="username"
              placeholder="Email Address"
              required=""
              autofocus=""
              onChange={(e) => setlogi({ ...logi, email: e.target.value })}
            />
            <input
              type="text"
              class="form-control"
              name="Password"
              placeholder="Password"
              required=""
              autofocus=""
              onChange={(e) => setlogi({ ...logi, password: e.target.value })}
            />

            <label class="checkbox">
              <input
                type="checkbox"
                value="remember-me"
                id="rememberMe"
                name="rememberMe"
              />{" "}
              Remember me
            </label>
            <button
              style={{ marginLeft: "52px", marginBottom: "10px" }}
              className="ymin"
              onClick={() => {
                dispatch(userlogi(logi));
              }}
            >
              login
            </button>
            <br />
            <h5>
              You don't have account{" "}
              <Link style={{ textDecoration: "none" }} to="/register">
                <span>Register now</span>
              </Link>{" "}
            </h5>
          </form>
        </div>
      )}
    </div>
  );
}

export default Logi;
