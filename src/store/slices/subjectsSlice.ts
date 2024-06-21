import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SubjectType } from "../../types/DatabaseType";
import { addSubject, fetchTeacherSubjects, fetchSubjects, putSubject, removeSubject } from "../thunks/subjectsThunk";

const subjectsSlice = createSlice({
    name: 'subjects',
    initialState: {
        allSubjects: null as SubjectType[] | null,
        mySubjects: null as SubjectType[] | null,
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
            state.allSubjects = action.payload;
            state.isLoading = false;
        });
        builder.addCase(fetchSubjects.rejected, (state, action) => {
            state.isLoading = false;
            if (action.error.message)
                state.error = action.error.message;
            else
                state.error = 'error';
        });

        builder.addCase(fetchTeacherSubjects.pending, (state) => {
            state.isLoading = true;
            state.error = '';
        });
        builder.addCase(fetchTeacherSubjects.fulfilled, (state, action: PayloadAction<SubjectType[]>) => {
            state.mySubjects = action.payload;
            state.isLoading = false;
        });
        builder.addCase(fetchTeacherSubjects.rejected, (state, action) => {
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
            if (state.allSubjects)
                state.allSubjects.push(action.payload);
            if (state.mySubjects)
                state.mySubjects.push(action.payload);
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
            if (state.allSubjects)
                state.allSubjects = state.allSubjects.filter(subject => subject.id !== action.payload);
            if (state.mySubjects)
                state.mySubjects = state.mySubjects.filter(subject => subject.id !== action.payload);
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
            if (state.allSubjects) {
                const index = state.allSubjects.findIndex(subject => subject.id === action.payload.id);
                if (index !== -1) {
                    state.allSubjects[index] = action.payload;
                }
            }
            if (state.mySubjects) {
                const index = state.mySubjects.findIndex(subject => subject.id === action.payload.id);
                if (index !== -1) {
                    state.mySubjects[index] = action.payload;
                }
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