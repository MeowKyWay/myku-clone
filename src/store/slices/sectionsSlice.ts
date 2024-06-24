import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SectionEligibleDepartmentType, SectionType } from "../../types/DatabaseType";
import { addSection, fetchSections, putSection, removeSection } from "../thunks/sectionsThunk";
import { addSectionEligibleDepartment, removeSectionEligibleDepartment } from "../thunks/sectionEligibleDepartmentThunk";

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

            state.data.sort((a, b) => {
                return a.name.localeCompare(b.name);
            }).sort((a, b) => {
                return (a.subject?.name as string).localeCompare(b.subject?.name as string);
            });
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
            action.payload.eligibleDepartments = { items: [] } as { items: SectionEligibleDepartmentType[] };
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

        builder.addCase(removeSectionEligibleDepartment.pending, (state) => {
            state.isLoading = true;
            state.error = '';
        });
        builder.addCase(removeSectionEligibleDepartment.fulfilled, (state, action: PayloadAction<{id: string, sectionID: string}>) => {
            if (!state.data) return;
            const index = state.data.findIndex(section => section.id === action.payload.sectionID);
            if (index !== -1) {
                const eligibleDepartments = state.data[index].eligibleDepartments?.items;
                if (!eligibleDepartments) return;
                const eligibleDepartmentIndex = eligibleDepartments.findIndex(department => department.id === action.payload.id);
                if (eligibleDepartmentIndex === -1) return;
                eligibleDepartments.splice(eligibleDepartmentIndex, 1);
            }
            state.isLoading = false;
        });
        builder.addCase(removeSectionEligibleDepartment.rejected, (state, action) => {
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