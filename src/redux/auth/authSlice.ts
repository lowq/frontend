import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface UserInfo {
  id: number;
  name: string;
  passwordHash: string;
  hash: string;
  email: string;
  role: string;
}

interface AuthState {
  logged: boolean;
  userInfo: UserInfo | null;
  jwtToken: string | null;
}

const initialState: AuthState = {
  logged: false,
  userInfo: null,
  jwtToken: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ jwt: string; user: UserInfo }>) => {
      state.jwtToken = action.payload.jwt;
      state.userInfo = action.payload.user;
      state.logged = true;
    },
    logout: (state) => {
      state.jwtToken = null;
      state.userInfo = null;
      state.logged = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
