import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DepartmentType } from "../../types/DatabaseType";
import { generateClient } from "aws-amplify/api";
import { listDepartments } from "../../graphql/queries";

const client = generateClient();

export const fetchDepartments = createAsyncThunk<DepartmentType[]>("fetchDepartments",
    async (): Promise<DepartmentType[]> => {
        const response = await client.graphql({
            query: listDepartments,
        })

        return response.data.listDepartments.items;
    }
)

const departmentsSlice = createSlice({
    name: 'departments',
    initialState: {
        data: [] as DepartmentType[],
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
    },
})

export const departmentsReducer = departmentsSlice.reducer;