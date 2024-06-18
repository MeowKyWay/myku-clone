import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/userSlice";
import { statesReducer } from "./slices/statesSlice";
import { registerReducer } from "./slices/registerSlice";
import { departmentsReducer } from "./slices/departmentsSlice";
import { facultiesReducer } from "./slices/facultiesSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        states: statesReducer,
        register: registerReducer,
        faculties: facultiesReducer,
        departments: departmentsReducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch