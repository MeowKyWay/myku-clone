import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PageState } from "../../types/PageState";

const statesSlice = createSlice({
    name: 'states',
    initialState: {
        pageState: PageState.login,
        navigationBarState: false,
    },
    reducers: {
        setPageState(state, action: PayloadAction<PageState>) {
            state.pageState = action.payload;
        },
        setNavigationBarState(state, action: PayloadAction<boolean>) {
            state.navigationBarState = action.payload;
        },
    }
})

export const { setPageState, setNavigationBarState } = statesSlice.actions;
export const statesReducer = statesSlice.reducer;