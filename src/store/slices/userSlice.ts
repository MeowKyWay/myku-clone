import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FetchUserAttributesOutput } from "aws-amplify/auth";
import { SectionType, StudentEnrollmentType } from "../../types/DatabaseType";
import { fetchMySections } from "../thunks/studentSectionsThunk";
import { addStudentEnrollment, fetchMyEnrollment } from "../thunks/studentEnrollmentsThunk";

export enum UserGroup {
    ADMIN = 'Admin',
    TEACHER = 'Teacher',
    STUDENT = 'Student',
}

export interface CurrentUserType {
    groups: UserGroup;
    attributes: FetchUserAttributesOutput;
    sections: SectionType[] | null;
    enrollments: StudentEnrollmentType[] | null;
}

const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: {
            groups: '' as UserGroup,
            attributes: {} as FetchUserAttributesOutput,
            sections: null,
            enrollments: null,
        } as CurrentUserType,

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
                sections: null,
                enrollments: null,
            };
        }
    },
    extraReducers(builder) {
        //Sections
        builder.addCase(fetchMySections.pending, (state) => {
            state.isLoading = true;
            state.error = '';
        });
        builder.addCase(fetchMySections.fulfilled, (state, action: PayloadAction<SectionType[]>) => {
            state.currentUser.sections = action.payload;
            state.isLoading = false;
        });
        builder.addCase(fetchMySections.rejected, (state, action) => {
            state.isLoading = false;
            if (action.error.message)
                state.error = action.error.message;
            else
                state.error = 'error';
        });

        //Enrollments
        builder.addCase(fetchMyEnrollment.pending, (state) => {
            state.isLoading = true;
            state.error = '';
        });
        builder.addCase(fetchMyEnrollment.fulfilled, (state, action: PayloadAction<StudentEnrollmentType[]>) => {
            state.currentUser.enrollments = action.payload;
            state.isLoading = false;
        });
        builder.addCase(fetchMyEnrollment.rejected, (state, action) => {
            state.isLoading = false;
            if (action.error.message)
                state.error = action.error.message;
            else
                state.error = 'error';
        });

        builder.addCase(addStudentEnrollment.pending, (state) => {
            state.isLoading = true;
            state.error = '';
        });
        builder.addCase(addStudentEnrollment.fulfilled, (state, action: PayloadAction<StudentEnrollmentType>) => {
            if (!state.currentUser.enrollments) return;
            state.currentUser.enrollments.push(action.payload);
            state.isLoading = false;
        });
        builder.addCase(addStudentEnrollment.rejected, (state, action) => {
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