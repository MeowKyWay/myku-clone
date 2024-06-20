import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { DepartmentType, FacultyType } from "../../types/DatabaseType";
import { fetchFacultiesPublic } from "../thunks/facultiesThunk";
import { fetchDepartmentsPublic } from "../thunks/departmentsThunk";

const registerSlice = createSlice({
    name: 'register',
    initialState: {
        email: '',
        faculties: null as FacultyType[] | null,
        departments: null as DepartmentType[] | null,
        isLoading: false,
        error: '',
    },
    reducers: {
        setRegisterEmail(state, action: PayloadAction<string>) {
            state.email = action.payload;
        },
    },
    extraReducers(builder) {
        builder.addCase(fetchFacultiesPublic.pending, (state) => {
            state.isLoading = true;
            state.error = '';
        });
        builder.addCase(fetchFacultiesPublic.fulfilled, (state, action: PayloadAction<FacultyType[]>) => {
            state.faculties = action.payload;
            state.isLoading = false;
        });
        builder.addCase(fetchFacultiesPublic.rejected, (state, action) => {
            state.isLoading = false;
            if (action.error.message)
                state.error = action.error.message;
            else
                state.error = 'error';
        });

        builder.addCase(fetchDepartmentsPublic.pending, (state) => {
            state.isLoading = true;
            state.error = '';
        });
        builder.addCase(fetchDepartmentsPublic.fulfilled, (state, action: PayloadAction<DepartmentType[]>) => {
            state.departments = action.payload;
            state.isLoading = false;
        });
        builder.addCase(fetchDepartmentsPublic.rejected, (state, action) => {
            state.isLoading = false;
            if (action.error.message)
                state.error = action.error.message;
            else
                state.error = 'error';
        });
    }
})

export const { setRegisterEmail } = registerSlice.actions;
export const registerReducer = registerSlice.reducer;