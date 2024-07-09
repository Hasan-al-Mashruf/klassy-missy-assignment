import { combineReducers, configureStore } from "@reduxjs/toolkit";
import regimentSliceReducer from "@/redux/features/regiment/regimentSlice";
import userSliceReducer from "@/redux/features/user/userSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};
// using combine reducers toi add more states in future
const rootReducer = combineReducers({
  regiment: regimentSliceReducer,
  user: userSliceReducer,
});
// persist state info...
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const makeStore = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false, // Disable serializability checks
      }).concat(),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
