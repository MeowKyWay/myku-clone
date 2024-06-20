import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SubjectType } from "../../types/DatabaseType";
import { addSubject, fetchSubjects, putSubject, removeSubject } from "../thunks/subjectsThunk";

const subjectsSlice = createSlice({
    name: 'subjects',
    initialState: {
        data: null as SubjectType[] | null,
        isLoading: false,
        error: '',
    },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchSubjects.pending, (state) => {
            state.isLoading = true;
            state.error = '';
        });
        builder.addCase(fetchSubjects.fulfilled, (state, action: PayloadAction<SubjectType[]>) => {
            state.data = action.payload;
            state.isLoading = false;
        });
        builder.addCase(fetchSubjects.rejected, (state, action) => {
            state.isLoading = false;
            if (action.error.message)
                state.error = action.error.message;
            else
                state.error = 'error';
        });

        builder.addCase(addSubject.pending, (state) => {
            state.isLoading = true;
            state.error = '';
        });
        builder.addCase(addSubject.fulfilled, (state, action: PayloadAction<SubjectType>) => {
            if (!state.data) return;
            state.data.push(action.payload);
            state.isLoading = false;
        });
        builder.addCase(addSubject.rejected, (state, action) => {
            state.isLoading = false;
            if (action.error.message)
                state.error = action.error.message;
            else 
                state.error = 'error';
        });

        builder.addCase(removeSubject.pending, (state) => {
            state.isLoading = true;
            state.error = '';
        });
        builder.addCase(removeSubject.fulfilled, (state, action: PayloadAction<string>) => {
            if (!state.data) return;
            state.data = state.data.filter(subject => subject.id !== action.payload);
            state.isLoading = false;
        });
        builder.addCase(removeSubject.rejected, (state, action) => {
            state.isLoading = false;
            if (action.error.message)
                state.error = action.error.message;
            else 
                state.error = 'error';
        });

        builder.addCase(putSubject.pending, (state) => {
            state.isLoading = true;
            state.error = '';
        });
        builder.addCase(putSubject.fulfilled, (state, action: PayloadAction<SubjectType>) => {
            if (!state.data) return;
            const index = state.data.findIndex(subject => subject.id === action.payload.id);
            if (index !== -1) {
                state.data[index] = action.payload;
            }
            state.isLoading = false;
        });
        builder.addCase(putSubject.rejected, (state, action) => {
            state.isLoading = false;
            if (action.error.message)
                state.error = action.error.message;
            else 
                state.error = 'error';
        });
    },
})

export const subjectsReducer = subjectsSlice.reducer;