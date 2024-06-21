import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SectionType } from "../../types/DatabaseType";
import { addSection, fetchSections, putSection, removeSection } from "../thunks/sectionsThunk";

const sectionsSlice = createSlice({
    name: 'sections',
    initialState: {
        allSections: null as SectionType[] | null,
        mySections: null as SectionType[] | null,
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
            state.allSections = action.payload;
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
            if (state.allSections)
                state.allSections.push(action.payload);
            if (state.mySections)
                state.mySections.push(action.payload);
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
            if (state.allSections)
                state.allSections = state.allSections.filter(department => department.id !== action.payload);
            if (state.mySections)
                state.mySections = state.mySections.filter(department => department.id !== action.payload);
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
            if (state.allSections) {
                const index = state.allSections.findIndex(department => department.id === action.payload.id);
                if (index !== -1) {
                    state.allSections[index] = action.payload;
                }
            }
            if (state.mySections) {
                const index = state.mySections.findIndex(department => department.id === action.payload.id);
                if (index !== -1) {
                    state.mySections[index] = action.payload;
                }
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
    },
})

export const sectionsReducer = sectionsSlice.reducer;