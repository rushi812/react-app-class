import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import userReducer from "./userSlice";

const appStore = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
});

export default appStore;
