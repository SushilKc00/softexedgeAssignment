import { IUsersInitialState } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";

const initialState: IUsersInitialState = {
  users: [],
  singleUserDetail: [],
  isLoading: true,
  isError: {
    status: false,
    message: "no error",
  },
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsersDetails: (state, actions) => {
      state.users = actions.payload;
      state.isLoading = false;
    },

    getSingleUserDetails: (state, actions) => {
      const data = state.users.filter(
        (user) => user.name == decodeURIComponent(actions.payload)
      );
      console.log(data);
    },

    setError: (state, action) => {
      state.users = [];
      state.isLoading = false;
      state.isError = {
        status: true,
        message: action.payload,
      };
    },
  },
});

export const { getUsersDetails, getSingleUserDetails, setError } =
  userSlice.actions;

export default userSlice.reducer;

export function getUserData() {
  return async function getUserFun(dispatch: AppDispatch) {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      dispatch(getUsersDetails(data));
    } catch (error: any) {
      dispatch(setError(error.message));
    }
  };
}
