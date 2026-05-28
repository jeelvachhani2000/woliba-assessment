export const selectRegistrationStep = (state) => state.registration.step;

// ============================================
// COMPANY
// ============================================

export const selectCompany = (state) => state.registration.company;

// ============================================
// OTP
// ============================================

export const selectOtpToken = (state) => state.registration.otpToken;

export const selectIsOtpVerified = (state) => state.registration.isOtpVerified;

// ============================================
// USER DETAILS
// ============================================

export const selectUserDetails = (state) => state.registration.userDetails;

// ============================================
// CREDENTIALS
// ============================================

export const selectCredentials = (state) => state.registration.credentials;

// ============================================
// INTERESTS
// ============================================

export const selectInterests = (state) => state.registration.interests;

// ============================================
// WELLBEING
// ============================================

export const selectWellbeing = (state) => state.registration.wellbeing;
