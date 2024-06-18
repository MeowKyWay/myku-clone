import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { addTeacher, fetchTeachers } from "../thunks/teachersThunk";
import { UserType } from "../../types/DatabaseType";

const teachersSlice = createSlice({
    name: 'teachers',
    initialState: {
        data: null as UserType[] | null,
        isLoading: false,
        error: '',
    },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchTeachers.pending, (state) => {
            state.isLoading = true;
            state.error = '';
        });
        builder.addCase(fetchTeachers.fulfilled, (state, action: PayloadAction<UserType[]>) => {
            state.data = action.payload;
            state.isLoading = false;
        });
        builder.addCase(fetchTeachers.rejected, (state, action) => {
            state.isLoading = false;
            if (action.error.message)
                state.error = action.error.message;
            else
                state.error = 'error';
        });

        builder.addCase(addTeacher.pending, (state) => {
            state.isLoading = true;
            state.error = '';
        })
        builder.addCase(addTeacher.fulfilled, (state, action: PayloadAction<UserType>) => {
            if (!state.data) return
            state.data.push(action.payload);
            state.isLoading = false;
        })
        builder.addCase(addTeacher.rejected, (state, action) => {
            state.isLoading = false;
            if (action.error.message)
                state.error = action.error.message
            else 
                state.error = 'error';
        })
    },
})

export const teachersReducer = teachersSlice.reducer;