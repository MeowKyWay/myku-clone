import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FetchUserAttributesOutput } from "aws-amplify/auth";

export enum UserGroup {
    ADMIN = 'Admin',
    TEACHER = 'Teacher',
    STUDENT = 'Student',
}

export interface UserType {
    groups: UserGroup;
    attributes: FetchUserAttributesOutput;
}

const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: {
            groups: '' as UserGroup,
            attributes: {} as FetchUserAttributesOutput,
        } as UserType,
    },
    reducers: {
        setUser(state, action: PayloadAction<UserType>) {
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
            };
        }
    }
})

export const { setUser, logout } = userSlice.actions;
export const userReducer = userSlice.reducer;