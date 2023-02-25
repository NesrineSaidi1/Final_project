import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userRegister = createAsyncThunk("user/register", async (user) => {
  try {
    let response = await axios.post(
      "http://localhost:5001/user/register",
      user
    );
    return response;
  } catch (error) {
    console.log(error);
  }
});
export const userlogi = createAsyncThunk("user/logi", async (user) => {
  try {
    let response = await axios.post("http://localhost:5001/user/login", user);
    return await response;
  } catch (error) {
    console.log(error);
  }
});
export const userCurrent = createAsyncThunk("user/current", async () => {
  try {
    let response = await axios.get("http://localhost:5001/user/current", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    console.log(response.data);
    return await response;
  } catch (error) {
    console.log(error);
  }
});
const initialState = {
  user: null,
  status: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.user = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: {
    [userRegister.pending]: (state) => {
      state.status = "pending";
    },
    [userRegister.fulfilled]: (state, action) => {
      state.status = "successsss";
      state.user = action.payload.data.newUserToken;
      localStorage.setItem("token", action.payload.data.token);
    },
    [userRegister.rejected]: (state) => {
      state.status = "fail";
    },
    [userlogi.pending]: (state) => {
      state.status = "pending";
    },
    [userlogi.fulfilled]: (state, action) => {
      state.status = "successsss";
      state.user = action.payload?.data?.user;
      localStorage.setItem("token", action.payload.data.token);
    },
    [userlogi.rejected]: (state) => {
      state.status = "fail";
    },
    [userCurrent.pending]: (state) => {
      state.status = "pending";
    },
    [userCurrent.fulfilled]: (state, action) => {
      state.status = "successsss";
      state.user = action.payload?.data?.user;
    },
    [userCurrent.rejected]: (state) => {
      state.status = "fail";
    },
  },
});

// Action creators are generated for each case reducer function
export const { logout } = userSlice.actions;

export default userSlice.reducer;
