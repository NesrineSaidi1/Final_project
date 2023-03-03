import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getrequest = createAsyncThunk("request/get", async (req, res) => {
  try {
    let result = axios.get("http://localhost:5001/request/");
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const addrequest = createAsyncThunk("request/add", async (request) => {
  try {
    let result = axios.post("http://localhost:5001/request/add", request);
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const deleterequest = createAsyncThunk("request/delete", async (id) => {
  try {
    let result = axios.delete(`http://localhost:5001/request/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const editrequest = createAsyncThunk(
  "request/edit",
  async ({ id, edit }) => {
    try {
      let result = axios.put(`http://localhost:5001/request/${id}`, edit);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  requestList: null,
  status: null,
};

export const requestSlice = createSlice({
  name: "request",
  initialState,
  reducers: {},
  extraReducers: {
    [getrequest.pending]: (state) => {
      state.status = "pending";
    },
    [getrequest.fulfilled]: (state, action) => {
      state.status = "success";
      state.requestList = action.payload.data.request;
    },
    [getrequest.rejected]: (state) => {
      state.status = "fail";
    },
    [addrequest.pending]: (state) => {
      state.status = "pending";
    },
    [addrequest.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [addrequest.rejected]: (state) => {
      state.status = "fail";
    },
    [deleterequest.pending]: (state) => {
      state.status = "pending";
    },
    [deleterequest.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [deleterequest.rejected]: (state) => {
      state.status = "fail";
    },
    [editrequest.pending]: (state) => {
      state.status = "pending";
    },
    [editrequest.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [editrequest.rejected]: (state) => {
      state.status = "fail";
    },
  },
});

// Action creators are generated for each case reducer function
//export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default requestSlice.reducer;
