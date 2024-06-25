import { createAsyncThunk } from "@reduxjs/toolkit";
import { generateClient } from "aws-amplify/api";
import { FacultyType } from "../../types/DatabaseType";
import { createFaculty, deleteFaculty, updateFaculty } from "../../graphql/mutations";
import { listFaculties } from "../../graphql/queries";
import ObjectUtils from "../../utility/ObjectUtils";
import { Lambda } from "@aws-sdk/client-lambda";
import AuthUtils from "../../utility/AuthUtils";

const client = generateClient();

export const fetchFaculties = createAsyncThunk<FacultyType[]>(
    "fetchFaculties",
    async (): Promise<FacultyType[]> => {
        const response = await client.graphql({
            query: listFaculties,
        })
        return response.data.listFaculties.items;
    }
)

export const fetchFacultiesPublic = createAsyncThunk<FacultyType[]>(
    "fetchFacultiesPublic",
    async (): Promise<FacultyType[]> => {

        const lambda = new Lambda({
            credentials: (await AuthUtils.getCredentials()),
            region: 'ap-southeast-1',
        });

        const response = await lambda.invoke({
            FunctionName: 'arn:aws:lambda:ap-southeast-1:891377257682:function:listFaculties',
            InvocationType: 'RequestResponse',
        });

        const faculties = ObjectUtils.lambdaDecode(response);

        return faculties as FacultyType[];
    }
)

export const addFaculty = createAsyncThunk<FacultyType, { name: string }>(
    "addFaculty",
    async ({ name }: { name: string }): Promise<FacultyType> => {
        const response = await client.graphql({
            query: createFaculty,
            variables: {
                input: {
                    name: name,
                }
            }
        })

        return response.data.createFaculty;
    }
)

export const removeFaculty = createAsyncThunk<string, string>(
    "removeFaculty",
    async (id: string): Promise<string> => {
        const response = await client.graphql({
            query: deleteFaculty,
            variables: {
                input: {
                    id: id,
                },
            },
        })
        return response.data.deleteFaculty.id;
    }
)

export const putFaculty = createAsyncThunk<FacultyType, { id: string, name: string }>(
    "putFaculty",
    async ({ id, name }: { id: string, name: string }): Promise<FacultyType> => {
        const response = await client.graphql({
            query: updateFaculty,
            variables: {
                input: {
                    id: id,
                    name: name,
                },
            },
        })

        return response.data.updateFaculty
    }
)