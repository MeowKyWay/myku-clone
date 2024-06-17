import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const registerSlice = createSlice({
    name: 'register',
    initialState: {
        email: '',
    },
    reducers: {
        setRegisterEmail(state, action: PayloadAction<string>) {
            state.email = action.payload;
        },
    }
})

export const { setRegisterEmail } = registerSlice.actions;
export const registerReducer = registerSlice.reducer;