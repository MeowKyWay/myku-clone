import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserType } from '../../types/DatabaseType';
import { createUser, listUserInGroup } from '../../utility/api';
import { UserGroup } from '../slices/userSlice';
import ObjectUtils from '../../utility/ObjectUtils';

// Async thunk to fetch a teacher
export const fetchTeachers = createAsyncThunk<UserType[]>(
    'fetchTeachers',
    async (): Promise<UserType[]> => {
        const response = await listUserInGroup(UserGroup.TEACHER);

        const users = response.map((user) => {
            return {
                id: user.Attributes.sub,
                name: user.Attributes.name,
                email: user.Attributes.email,
                departmentID: user.Attributes['custom:departmentID'],
                userStatus: user.UserStatus,
            } as UserType;
        });

        return users as UserType[];
    }
);

// Async thunk to add a teacher
export const addTeacher = createAsyncThunk<UserType, { name: string, email: string, departmentID: string }>(
    'addTeacher',
    async ({ name, email, departmentID }: {name: string, email: string, departmentID: string}): Promise<UserType> => {
        const response = await createUser({
                name: name, 
                email: email,
                groups: UserGroup.TEACHER, 
                departmentID: departmentID,
        });

        const user = ObjectUtils.convertAttributesArray(response.createUserResponse.User)

        console.log(user);

        return {
            id: user.Attributes.sub,
            name: user.Attributes.name,
            email: user.Attributes.email,
            departmentID: user.Attributes['custom:departmentID'],
            userStatus: user.UserStatus,

        } as UserType;
    }
);