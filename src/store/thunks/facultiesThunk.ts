import { createAsyncThunk } from "@reduxjs/toolkit";
import { generateClient } from "aws-amplify/api";
import { FacultyType } from "../../types/DatabaseType";
import { createFaculty, deleteFaculty, updateFaculty } from "../../graphql/mutations";
import { listFaculties } from "../../graphql/queries";
import axios from "axios";

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
        const response = await axios.get('https://63tw46cuod.execute-api.ap-southeast-1.amazonaws.com/default/listFaculties');
        return response.data;
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