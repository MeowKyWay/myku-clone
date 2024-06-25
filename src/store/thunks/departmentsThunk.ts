import { createAsyncThunk } from "@reduxjs/toolkit";
import { generateClient } from "aws-amplify/api";
import { DepartmentType } from "../../types/DatabaseType";
import { listDepartmentsWithFaculty } from "../../custom_graphql/customQueries";
import { createDepartment, deleteDepartment, updateDepartment } from "../../graphql/mutations";
import { Lambda } from "@aws-sdk/client-lambda";
import ObjectUtils from "../../utility/ObjectUtils";
import AuthUtils from "../../utility/AuthUtils";

const client = generateClient();

export const fetchDepartments = createAsyncThunk<DepartmentType[]>(
    "fetchDepartments",
    async (): Promise<DepartmentType[]> => {
        const response = await client.graphql({
            query: listDepartmentsWithFaculty,
        })
        return response.data.listDepartments.items;
    }
)

export const fetchDepartmentsPublic = createAsyncThunk<DepartmentType[]>(
    "fetchDepartmentsPublic",
    async (): Promise<DepartmentType[]> => {
        const lambda = new Lambda({
            credentials: (await AuthUtils.getCredentials()),
            region: 'ap-southeast-1',
        });

        const response = await lambda.invoke({
            FunctionName: 'arn:aws:lambda:ap-southeast-1:891377257682:function:listDepartments',
            InvocationType: 'RequestResponse',
        });

        const departments = ObjectUtils.lambdaDecode(response);

        return departments as DepartmentType[];
    }
)

export const addDepartment = createAsyncThunk<DepartmentType, { name: string, facultyID: string }>(
    "addDepartment",
    async ({ name, facultyID }: { name: string, facultyID: string }): Promise<DepartmentType> => {
        const response = await client.graphql({
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
        const response = await client.graphql({
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

export const putDepartment = createAsyncThunk<DepartmentType, { id: string, name: string, facultyID: string }>(
    "putDepartment",
    async ({ id, name, facultyID }: { id: string, name: string, facultyID: string }): Promise<DepartmentType> => {
        const response = await client.graphql({
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