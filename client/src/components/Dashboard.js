import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userCurrent } from "../JS/userSlice/userSlice";

function Dashboard() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userCurrent());
  }, []);

  return <div></div>;
}

export default Dashboard;
