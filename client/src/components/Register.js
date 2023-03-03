import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userRegister } from "../JS/userSlice/userSlice";
import { Link, useNavigate } from "react-router-dom";
function Register({ ping, setping }) {
  const [register, setregister] = useState({
    img: "https://w7.pngwing.com/pngs/754/2/png-transparent-samsung-galaxy-a8-a8-user-login-telephone-avatar-pawn-blue-angle-sphere-thumbnail.png",
    name: "",
    LastName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div>
      <div className="wrapper">
        <form onSubmit={(e) => e.preventDefault()} className="form-signin">
          <h2 className="form-signin-heading">Please Register</h2>
          <input
            type="text"
            class="form-control"
            name="name"
            placeholder="name"
            required=""
            autofocus=""
            onChange={(e) => setregister({ ...register, name: e.target.value })}
          />
          <input
            type="text"
            class="form-control"
            name="LastName"
            placeholder="LastName"
            required=""
            autofocus=""
            onChange={(e) =>
              setregister({ ...register, LastName: e.target.value })
            }
          />
          <input
            type="text"
            class="form-control"
            name="username"
            placeholder="Email Address"
            required=""
            autofocus=""
            onChange={(e) =>
              setregister({ ...register, email: e.target.value })
            }
          />
          <input
            type="text"
            class="form-control"
            name="Password"
            placeholder="Password"
            required=""
            autofocus=""
            onChange={(e) =>
              setregister({ ...register, password: e.target.value })
            }
          />
          <br />
          <button
            className="ymin"
            style={{ marginLeft: "34px" }}
            onClick={() => {
              setTimeout(() => {
                dispatch(userRegister(register));
                setping(!ping);
                navigate("/");
              }, 1000);
            }}
          >
            Register
          </button>

          <h5>
            <br />
            You already have account{" "}
            <Link style={{ textDecoration: "none" }} to="/logi">
              {" "}
              <span>Log in </span>
            </Link>{" "}
          </h5>
        </form>
      </div>
    </div>
  );
}

export default Register;
