import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import sidebarSlice from "./slices/sidebarSlice";

export const store = configureStore({
  reducer: {
    users: userSlice,
    isSideBarOpen: sidebarSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
