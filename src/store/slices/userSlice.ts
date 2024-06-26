import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FetchUserAttributesOutput } from "aws-amplify/auth";
import { SectionType } from "../../types/DatabaseType";

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
            sections: [] as SectionType[],
        } as CurrentUserType,
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
    }
})

export const { setUser, logout } = userSlice.actions;
export const userReducer = userSlice.reducer;