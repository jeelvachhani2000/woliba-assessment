import { createSlice } from "@reduxjs/toolkit";

// ============================================
// INITIAL STATE
// ============================================

const initialState = {
  step: 1,
  company: null,
  otpToken: null,
  isOtpVerified: false,
  userDetails: {},
  credentials: {},
  interests: [],
  wellbeing: [],
};

// ============================================
// SLICE
// ============================================

const registrationSlice = createSlice({
  name: "registration",

  initialState,

  reducers: {
    // =========================
    // STEP
    // =========================

    nextStep: (state) => {
      state.step += 1;
    },

    prevStep: (state) => {
      if (state.step > 1) {
        state.step -= 1;
      }
    },

    goToStep: (state, action) => {
      state.step = action.payload;
    },

    // =========================
    // COMPANY
    // =========================

    setCompanyData: (state, action) => {
      state.company = action.payload;
    },

    // =========================
    // OTP
    // =========================

    setOtpToken: (state, action) => {
      state.otpToken = action.payload;
    },

    setOtpVerified: (state, action) => {
      state.isOtpVerified = action.payload;
    },

    // =========================
    // USER DETAILS
    // =========================

    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },

    // =========================
    // CREDENTIALS
    // =========================

    setCredentialsData: (state, action) => {
      state.credentials = action.payload;
    },

    // =========================
    // INTERESTS
    // =========================

    setInterests: (state, action) => {
      state.interests = action.payload;
    },

    // =========================
    // WELLBEING
    // =========================

    setWellbeing: (state, action) => {
      state.wellbeing = action.payload;
    },

    // =========================
    // RESET
    // =========================

    resetRegistration: () => initialState,
  },
});

// ============================================
// EXPORT ACTIONS
// ============================================

export const {
  nextStep,

  prevStep,

  goToStep,

  setCompanyData,

  setOtpToken,

  setOtpVerified,

  setUserDetails,

  setCredentialsData,

  setInterests,

  setWellbeing,

  resetRegistration,
} = registrationSlice.actions;

// ============================================
// EXPORT REDUCER
// ============================================

export default registrationSlice.reducer;
