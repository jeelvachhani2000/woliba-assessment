// redux/authentications/authenticationsSlice.js

import { createSlice } from "@reduxjs/toolkit";

// ============================================
// INITIAL STATE
// ============================================

const initialState = {
  user: null,

  token: null,
};

// ============================================
// SLICE
// ============================================

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    // =========================
    // LOGIN
    // =========================

    setCredentials: (state, action) => {
      console.log(action.payload, "ss");
      state.user = action.payload.user;
      state.token = action.payload.token;
    },

    // =========================
    // LOGOUT
    // =========================

    logout: (state) => {
      state.user = null;

      state.token = null;
    },
  },
});

// ============================================
// EXPORT ACTIONS
// ============================================

export const {
  setCredentials,

  logout,
} = authSlice.actions;

// ============================================
// EXPORT REDUCER
// ============================================

export default authSlice.reducer;
