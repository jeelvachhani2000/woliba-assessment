// ============================================
// USER
// ============================================

export const selectUser = (state) => state.auth.user;

// ============================================
// TOKEN
// ============================================

export const selectToken = (state) => state.auth.token;

// ============================================
// AUTH STATUS
// ============================================

export const selectIsAuthenticated = (state) => !!state.auth.token;
