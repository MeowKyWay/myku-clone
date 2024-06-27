import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FetchUserAttributesOutput } from "aws-amplify/auth";
import { SectionType, StudentSectionType } from "../../types/DatabaseType";
import { addStudentSection, fetchMySections } from "../thunks/studentSectionsThunk";

export enum UserGroup {
    ADMIN = 'Admin',
    TEACHER = 'Teacher',
    STUDENT = 'Student',
}

export interface CurrentUserType {
    groups: UserGroup;
    attributes: FetchUserAttributesOutput;
    sections: SectionType[];
}

const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: {
            groups: '' as UserGroup,
            attributes: {} as FetchUserAttributesOutput,
        } as CurrentUserType,

        sections: null as StudentSectionType[] | null,
        isLoading: false,
        error: '',
    },
    reducers: {
        setUser(state, action: PayloadAction<CurrentUserType>) {
            let userGroup = action.payload.groups;
            switch (userGroup) {
                case 'Admin':
                    userGroup = UserGroup.ADMIN;
                    break;
                case 'Teacher':
                    userGroup = UserGroup.TEACHER;
                    break;
                default:
                    userGroup = UserGroup.STUDENT;
                    break;
            }
            
            state.currentUser.attributes = action.payload.attributes;
            state.currentUser.groups = userGroup;
        },
        logout(state) {
            state.currentUser = {
                groups: '' as UserGroup,
                attributes: {},
                sections: [] as SectionType[],
            };
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchMySections.pending, (state) => {
            state.isLoading = true;
            state.error = '';
        });
        builder.addCase(fetchMySections.fulfilled, (state, action: PayloadAction<StudentSectionType[]>) => {
            state.sections = action.payload;
            state.isLoading = false;
        });
        builder.addCase(fetchMySections.rejected, (state, action) => {
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
            if (!state.sections) return;
            state.sections.push(action.payload);
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

export const { setUser, logout } = userSlice.actions;
export const userReducer = userSlice.reducer;