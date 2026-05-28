// redux/rootStore.js

import { configureStore } from "@reduxjs/toolkit";

import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

import createWebStorage from "redux-persist/es/storage/createWebStorage";

import { rootReducer } from "./rootReducer";

// ============================================
// FIX STORAGE FOR SSR / VITE
// ============================================

const createNoopStorage = () => {
  return {
    getItem() {
      return Promise.resolve(null);
    },

    setItem(_key, value) {
      return Promise.resolve(value);
    },

    removeItem() {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined" ? createWebStorage("local") : createNoopStorage();

// ============================================
// PERSIST CONFIG
// ============================================

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["registration", "auth"],
};

// ============================================
// PERSISTED REDUCER
// ============================================

const persistedReducer = persistReducer(persistConfig, rootReducer);

// ============================================
// STORE
// ============================================

export const rootStore = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// ============================================
// PERSISTOR
// ============================================

export const persistor = persistStore(rootStore);
