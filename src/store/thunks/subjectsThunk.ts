import { createAsyncThunk } from "@reduxjs/toolkit";
import { generateClient } from "aws-amplify/api";
import { SubjectType } from "../../types/DatabaseType";
import { createSubject, deleteSubject, updateSubject } from "../../graphql/mutations";
import { listSubjectWithSections } from "../../custom_graphql/customQueries";

const client = generateClient();

export const fetchSubjects = createAsyncThunk<SubjectType[]>(
    "fetchSubjects",
    async (): Promise<SubjectType[]> => {
        const response = await client.graphql({
            query: listSubjectWithSections,
        })

        const subjects = response.data.listSubjects.items.sort(
            (a: SubjectType, b: SubjectType) => a.name.localeCompare(b.name)
        );

        subjects.map(subject => {
            subject.sections?.items.sort(
                (a, b) => a.name.localeCompare(b.name)
            )
        })

        return subjects;
    }
)

export const addSubject = createAsyncThunk<SubjectType, { name: string, credit: number, departmentID: string }>(
    "addSubject",
    async ({ name, credit, departmentID }: { name: string, credit: number, departmentID: string }): Promise<SubjectType> => {
        const response = await client.graphql({
            query: createSubject,
            variables: {
                input: {
                    name: name,
                    credit: credit,
                    departmentID: departmentID,
                }
            }
        })
        return response.data.createSubject as SubjectType;
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

        return response.data.updateSubject as SubjectType;
    }
)