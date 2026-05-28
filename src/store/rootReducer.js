import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "./authentications/authenticationsSlice";

import registrationReducer from "./authentications/registration/registrationSlice";

export const rootReducer = combineReducers({
  auth: authReducer,
  registration: registrationReducer,
});
