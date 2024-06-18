import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserType } from '../../types/DatabaseType';
import { listUserInGroup } from '../../utility/api';
import { UserGroup } from '../slices/userSlice';

// Async thunk to fetch a teacher
export const fetchStudents = createAsyncThunk<UserType[]>(
    'fetchStudents',
    async (): Promise<UserType[]> => {
        const response = await listUserInGroup(UserGroup.STUDENT);

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