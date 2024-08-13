import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userName: "Default User 1",
  },
  reducers: {
    updateUserName: (state, action) => {
      console.log("state", state);
      console.log("action", action);
      state.userName = action.payload.join(", ");
    },
  },
});

export const { updateUserName } = userSlice.actions;

export default userSlice.reducer;
