import { configureStore } from "@reduxjs/toolkit";
import internshipSlice from "./internshipSlice";
import userSlice from "./userSlice/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    internship: internshipSlice,
  },
});
