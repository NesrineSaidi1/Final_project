import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const  getinternshipWithFilter = createAsyncThunk(
  "internship/get",
  async (filterobj) => {
    try {
      let result = axios.post("http://localhost:5001/internship/", filterobj);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getinternship = createAsyncThunk("internship/getfilter", async () => {
  try {
    let result = axios.get("http://localhost:5001/internship/");
    return result;
  } catch (error) {
    console.log(error);
  }
});



export const addinternship = createAsyncThunk(
  "internship/add",
  async (newinternship) => {
    try {
      let result = axios.post(
        "http://localhost:5001/internship/add",
        newinternship
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteinternship = createAsyncThunk(
  "internship/delete",
  async (id) => {
    try {
      let result = axios.delete(`http://localhost:5001/internship/${id}`);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

export const editinternship = createAsyncThunk(
  "internship/edit",
  async ({ id, edit }) => {
    try {
      let result = axios.put(`http://localhost:5001/internship/${id}`, edit);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  internshipList: null,
  status: null,
};

export const internshipSlice = createSlice({
  name: "internship",
  initialState,
  reducers: {},
  extraReducers: {
    [getinternship.pending]: (state) => {
      state.status = "pending";
    },
    [getinternship.fulfilled]: (state, action) => {
      state.status = "success";
      state.internshipList = action.payload.data.internship;
    },
    [getinternship.rejected]: (state) => {
      state.status = "fail";
    },
    [getinternshipWithFilter.pending]: (state) => {
      state.status = "pending";
    },
    [getinternshipWithFilter.fulfilled]: (state, action) => {
      state.status = "success";
      state.internshipList = action.payload.data.internship;
    },
    [getinternshipWithFilter.rejected]: (state) => {
      state.status = "fail";
    },
    [addinternship.pending]: (state) => {
      state.status = "pending";
    },
    [addinternship.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [addinternship.rejected]: (state) => {
      state.status = "fail";
    },
    [deleteinternship.pending]: (state) => {
      state.status = "pending";
    },
    [deleteinternship.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [deleteinternship.rejected]: (state) => {
      state.status = "fail";
    },
    [editinternship.pending]: (state) => {
      state.status = "pending";
    },
    [editinternship.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [editinternship.rejected]: (state) => {
      state.status = "fail";
    },
  },
});

// Action creators are generated for each case reducer function
//export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default internshipSlice.reducer;
