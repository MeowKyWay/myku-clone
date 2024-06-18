import { createAsyncThunk } from "@reduxjs/toolkit";
import { generateClient } from "aws-amplify/api";
import { DepartmentType } from "../../types/DatabaseType";
import { listDepartmentsWithFaculty } from "../../custom_graphql/customQueries";
import { createDepartment, deleteDepartment, updateDepartment } from "../../graphql/mutations";

const userPoolClient = generateClient({authMode: 'userPool'});
const apiKeyClient = generateClient({authMode: 'apiKey'});

export const fetchDepartments = createAsyncThunk<DepartmentType[]>(
    "fetchDepartments",
    async (): Promise<DepartmentType[]> => {
        const response = await apiKeyClient.graphql({
            query: listDepartmentsWithFaculty,
        })
        return response.data.listDepartments.items;
    }
)

export const addDepartment = createAsyncThunk<DepartmentType, {name: string, facultyID: string}>(
    "addDepartment",
    async ({name, facultyID}: {name: string, facultyID: string}): Promise<DepartmentType> => {
        const response = await userPoolClient.graphql({
            query: createDepartment,
            variables: {
                input: {
                    name: name,
                    facultyID: facultyID,
                }
            }
        })

        return response.data.createDepartment;
    }
)

export const removeDepartment = createAsyncThunk<string, string>(
    "removeDepartment",
    async (id: string): Promise<string> => {
        const response = await userPoolClient.graphql({
            query: deleteDepartment,
            variables: {
                input: {
                    id: id,
                },
            },
        })
        return response.data.deleteDepartment.id;
    }
)

export const putDepartment = createAsyncThunk<DepartmentType, {id: string, name: string, facultyID: string}>(
    "putDepartment",
    async ({id, name, facultyID}: {id: string, name: string, facultyID: string}): Promise<DepartmentType> => {
        const response = await userPoolClient.graphql({
            query: updateDepartment,
            variables: {
                input: {
                    id: id,
                    name: name,
                    facultyID: facultyID,
                },
            },
        })

        return response.data.updateDepartment
    }
)