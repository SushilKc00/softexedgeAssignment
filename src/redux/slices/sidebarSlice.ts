import { IUsersInitialState } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const sideBarSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setIsSideBarOpen: (state, actions) => {
      state.isOpen = actions.payload;
    },
  },
});

export const { setIsSideBarOpen } = sideBarSlice.actions;

export default sideBarSlice.reducer;
