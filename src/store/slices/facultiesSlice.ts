import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FacultyType } from "../../types/DatabaseType";
import { addFaculty, fetchFaculties, putFaculty, removeFaculty } from "../thunks/facultiesThunk";

const facultiesSlice = createSlice({
    name: 'faculties',
    initialState: {
        data: null as FacultyType[] | null,
        isLoading: false,
        error: '',
    },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchFaculties.pending, (state) => {
            state.isLoading = true;
            state.error = '';
        });
        builder.addCase(fetchFaculties.fulfilled, (state, action: PayloadAction<FacultyType[]>) => {
            state.data = action.payload;
            state.isLoading = false;
        });
        builder.addCase(fetchFaculties.rejected, (state, action) => {
            state.isLoading = false;
            if (action.error.message)
                state.error = action.error.message;
            else
                state.error = 'error';
        });

        builder.addCase(addFaculty.pending, (state) => {
            state.isLoading = true;
            state.error = '';
        });
        builder.addCase(addFaculty.fulfilled, (state, action: PayloadAction<FacultyType>) => {
            if (!state.data) return;
            state.data.push(action.payload);
            state.isLoading = false;
        });
        builder.addCase(addFaculty.rejected, (state, action) => {
            state.isLoading = false;
            if (action.error.message)
                state.error = action.error.message;
            else 
                state.error = 'error';
        });

        builder.addCase(removeFaculty.pending, (state) => {
            state.isLoading = true;
            state.error = '';
        });
        builder.addCase(removeFaculty.fulfilled, (state, action: PayloadAction<string>) => {
            if (!state.data) return;
            state.data = state.data.filter(faculty => faculty.id !== action.payload);
            state.isLoading = false;
        });
        builder.addCase(removeFaculty.rejected, (state, action) => {
            state.isLoading = false;
            if (action.error.message)
                state.error = action.error.message;
            else 
                state.error = 'error';
        });

        builder.addCase(putFaculty.pending, (state) => {
            state.isLoading = true;
            state.error = '';
        });
        builder.addCase(putFaculty.fulfilled, (state, action: PayloadAction<FacultyType>) => {
            if (!state.data) return;
            const index = state.data.findIndex(faculty => faculty.id === action.payload.id);
            if (index !== -1) {
                state.data[index] = action.payload;
            }
            state.isLoading = false;
        });
        builder.addCase(putFaculty.rejected, (state, action) => {
            state.isLoading = false;
            if (action.error.message)
                state.error = action.error.message;
            else 
                state.error = 'error';
        });
    },
})

export const facultiesReducer = facultiesSlice.reducer;