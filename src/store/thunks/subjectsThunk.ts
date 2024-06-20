import { createAsyncThunk } from "@reduxjs/toolkit";
import { generateClient } from "aws-amplify/api";
import { SubjectType } from "../../types/DatabaseType";
import { createSubject, deleteSubject, updateSubject } from "../../graphql/mutations";
import { listSubjects } from "../../graphql/queries";

const client = generateClient();

export const fetchSubjects = createAsyncThunk<SubjectType[]>(
    "fetchSubjects",
    async (): Promise<SubjectType[]> => {
        const response = await client.graphql({
            query: listSubjects,
        })
        return response.data.listSubjects.items;
    }
)

export const addSubject = createAsyncThunk<SubjectType, { name: string, credit: number, departmentID: string, teacher: string }>(
    "addSubject",
    async ({ name, credit, departmentID, teacher }: { name: string, credit: number, departmentID: string, teacher: string }): Promise<SubjectType> => {
        const response = await client.graphql({
            query: createSubject,
            variables: {
                input: {
                    name: name,
                    credit: credit,
                    departmentID: departmentID,
                    teacher: teacher,
                }
            }
        })
        return response.data.createSubject;
    }
)

export const removeSubject = createAsyncThunk<string, string>(
    "removeSubject",
    async (id: string): Promise<string> => {
        const response = await client.graphql({
            query: deleteSubject,
            variables: {
                input: {
                    id: id,
                },
            },
        })
        return response.data.deleteSubject.id;
    }
)

export const putSubject = createAsyncThunk<SubjectType, { id: string, name: string, credit: number }>(
    "putSubject",
    async ({ id, name, credit }: { id: string, name: string, credit: number }): Promise<SubjectType> => {
        const response = await client.graphql({
            query: updateSubject,
            variables: {
                input: {
                    id: id,
                    name: name,
                    credit: credit,
                },
            },
        })

        return response.data.updateSubject
    }
)