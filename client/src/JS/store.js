import { configureStore } from "@reduxjs/toolkit";
import internshipSlice from "./internshipSlice";
import RequestSlice from "./RequestSlice";
import userSlice from "./userSlice/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    internship: internshipSlice,
    request: RequestSlice
  },
});
