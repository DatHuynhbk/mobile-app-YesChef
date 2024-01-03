import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@/Services";

interface IUserState {
  data: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: IUserState = {
  data: null,
  loading: false,
  error: null,
};


const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getUserSuccess: (state, action: PayloadAction<User>) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    getUserFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});


export const { getUserStart, getUserSuccess, getUserFailure } = slice.actions;


export const userReducers = slice.reducer;
