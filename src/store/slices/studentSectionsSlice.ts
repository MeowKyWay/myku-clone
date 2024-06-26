import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { StudentSectionType } from "../../types/DatabaseType";
import { addStudentSection, fetchStudentSections } from "../thunks/studentSectionsThunk";

const studentSectionsSlice = createSlice({
    name: 'studentSections',
    initialState: {
        data: null as StudentSectionType[] | null,
        isLoading: false,
        error: '',
    },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchStudentSections.pending, (state) => {
            state.isLoading = true;
            state.error = '';
        });
        builder.addCase(fetchStudentSections.fulfilled, (state, action: PayloadAction<StudentSectionType[]>) => {
            state.data = action.payload;
            state.isLoading = false;
        });
        builder.addCase(fetchStudentSections.rejected, (state, action) => {
            state.isLoading = false;
            if (action.error.message)
                state.error = action.error.message;
            else
                state.error = 'error';
        });

        builder.addCase(addStudentSection.pending, (state) => {
            state.isLoading = true;
            state.error = '';
        });
        builder.addCase(addStudentSection.fulfilled, (state, action: PayloadAction<StudentSectionType>) => {
            if (!state.data) return;
            state.data.push(action.payload);
            state.isLoading = false;
        });
        builder.addCase(addStudentSection.rejected, (state, action) => {
            state.isLoading = false;
            if (action.error.message)
                state.error = action.error.message;
            else 
                state.error = 'error';
        });
    },
})

export const studentSectionsReducer = studentSectionsSlice.reducer;