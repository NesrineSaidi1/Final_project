import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../JS/userSlice/userSlice";

function Profil() {
  const user = useSelector((state) => state.user?.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum error harum recusandae, sapiente velit ea, quaerat, libero corrupti dolore dicta ab nam veritatis? Qui aliquid laborum nulla sint tempora a?</h1>
      {user?.isAdmin ? 
      
      
      <h1>dash</h1>
      
      : <h1>profil</h1> }

      <button
        onClick={() => {
          dispatch(logout());
          navigate("/logi");
        }}
      >
        logout
      </button>
    </div>
  );
}

export default Profil;

//  <button  onClick={() => {
//             setTimeout(() => {localStorage.removeItem("token");

//               navigate("/logi");
//             }, 1000);}} >logout</button>
