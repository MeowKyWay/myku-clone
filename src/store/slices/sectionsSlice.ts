import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SectionEligibleDepartmentType, SectionType } from "../../types/DatabaseType";
import { addSection, fetchSections, putSection, removeSection } from "../thunks/sectionsThunk";
import { addSectionEligibleDepartment } from "../thunks/sectionEligibleDepartmentThunk";

const sectionsSlice = createSlice({
    name: 'sections',
    initialState: {
        data: null as SectionType[] | null,
        isLoading: false,
        error: '',
    },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchSections.pending, (state) => {
            state.isLoading = true;
            state.error = '';
        });
        builder.addCase(fetchSections.fulfilled, (state, action: PayloadAction<SectionType[]>) => {
            state.data = action.payload;
            state.isLoading = false;
        });
        builder.addCase(fetchSections.rejected, (state, action) => {
            state.isLoading = false;
            if (action.error.message)
                state.error = action.error.message;
            else
                state.error = 'error';
        });

        builder.addCase(addSection.pending, (state) => {
            state.isLoading = true;
            state.error = '';
        })
        builder.addCase(addSection.fulfilled, (state, action: PayloadAction<SectionType>) => {
            if (!state.data) return;
            state.data.push(action.payload);
            state.isLoading = false;
        })
        builder.addCase(addSection.rejected, (state, action) => {
            state.isLoading = false;
            if (action.error.message)
                state.error = action.error.message
            else
                state.error = 'error';
        })

        builder.addCase(removeSection.pending, (state) => {
            state.isLoading = true;
            state.error = '';
        });
        builder.addCase(removeSection.fulfilled, (state, action: PayloadAction<string>) => {
            if (!state.data) return;
            state.data = state.data.filter(department => department.id !== action.payload);
            state.isLoading = false;
        });
        builder.addCase(removeSection.rejected, (state, action) => {
            state.isLoading = false;
            if (action.error.message)
                state.error = action.error.message;
            else
                state.error = 'error';
        });

        builder.addCase(putSection.pending, (state) => {
            state.isLoading = true;
            state.error = '';
        });
        builder.addCase(putSection.fulfilled, (state, action: PayloadAction<SectionType>) => {
            if (!state.data) return;
            const index = state.data.findIndex(department => department.id === action.payload.id);
            if (index !== -1) {
                state.data[index] = action.payload;
            }
            state.isLoading = false;
        });
        builder.addCase(putSection.rejected, (state, action) => {
            state.isLoading = false;
            if (action.error.message) {
                state.error = action.error.message;
            } else {
                state.error = 'error';
            }
        });

        builder.addCase(addSectionEligibleDepartment.pending, (state) => {
            state.isLoading = true;
            state.error = '';
        });

        builder.addCase(addSectionEligibleDepartment.fulfilled, (state, action: PayloadAction<SectionEligibleDepartmentType>) => {
            if (!state.data) return;
            const index = state.data?.findIndex(section => section.id === action.payload.sectionID);
            if (index !== -1) {
                state.data[index].eligibleDepartments?.items.push(action.payload);
            }
            state.isLoading = false;
        });

        builder.addCase(addSectionEligibleDepartment.rejected, (state, action) => {
            state.isLoading = false;
            if (action.error.message) {
                state.error = action.error.message;
            } else {
                state.error = 'error';
            }
        });
    },
})

export const sectionsReducer = sectionsSlice.reducer;