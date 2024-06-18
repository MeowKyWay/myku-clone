import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { DepartmentType } from "../../types/DatabaseType";
import { addDepartment, fetchDepartments, putDepartment, removeDepartment } from "../thunks/departmentsThunk";

const departmentsSlice = createSlice({
    name: 'departments',
    initialState: {
        data: null as DepartmentType[] | null,
        isLoading: false,
        error: '',
    },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchDepartments.pending, (state) => {
            state.isLoading = true;
            state.error = '';
        });
        builder.addCase(fetchDepartments.fulfilled, (state, action: PayloadAction<DepartmentType[]>) => {
            state.data = action.payload;
            state.isLoading = false;
        });
        builder.addCase(fetchDepartments.rejected, (state, action) => {
            state.isLoading = false;
            if (action.error.message)
                state.error = action.error.message;
            else
                state.error = 'error';
        });

        builder.addCase(addDepartment.pending, (state) => {
            state.isLoading = true;
            state.error = '';
        })
        builder.addCase(addDepartment.fulfilled, (state, action: PayloadAction<DepartmentType>) => {
            if (!state.data) return
            state.data.push(action.payload);
            state.isLoading = false;
        })
        builder.addCase(addDepartment.rejected, (state, action) => {
            state.isLoading = false;
            if (action.error.message)
                state.error = action.error.message
            else 
                state.error = 'error';
        })

        builder.addCase(removeDepartment.pending, (state) => {
            state.isLoading = true;
            state.error = '';
        });
        builder.addCase(removeDepartment.fulfilled, (state, action: PayloadAction<string>) => {
            if (!state.data) return
            state.data = state.data.filter(department => department.id !== action.payload);
            state.isLoading = false;
        });
        builder.addCase(removeDepartment.rejected, (state, action) => {
            state.isLoading = false;
            if (action.error.message)
                state.error = action.error.message;
            else
                state.error = 'error';
        });

        builder.addCase(putDepartment.pending, (state) => {
            state.isLoading = true;
            state.error = '';
        });
        builder.addCase(putDepartment.fulfilled, (state, action: PayloadAction<DepartmentType>) => {
            if (!state.data) return;
            const index = state.data.findIndex(department => department.id === action.payload.id);
            if (index !== -1) {
                state.data[index] = action.payload;
            }
            state.isLoading = false;
        });
        builder.addCase(putDepartment.rejected, (state, action) => {
            state.isLoading = false;
            if (action.error.message) {
                state.error = action.error.message;
            } else {
                state.error = 'error';
            }
        });
    },
})

export const departmentsReducer = departmentsSlice.reducer;