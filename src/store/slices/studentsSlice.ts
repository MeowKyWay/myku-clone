import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchStudents } from "../thunks/studentsThunk";
import { UserType } from "../../types/DatabaseType";

const studentsSlice = createSlice({
    name: 'students',
    initialState: {
        data: null as UserType[] | null,
        isLoading: false,
        error: '',
    },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchStudents.pending, (state) => {
            state.isLoading = true;
            state.error = '';
        });
        builder.addCase(fetchStudents.fulfilled, (state, action: PayloadAction<UserType[]>) => {
            state.data = action.payload;
            state.isLoading = false;
        });
        builder.addCase(fetchStudents.rejected, (state, action) => {
            state.isLoading = false;
            if (action.error.message)
                state.error = action.error.message;
            else
                state.error = 'error';
        });
    },
})

export const studentsReducer = studentsSlice.reducer;