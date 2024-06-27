import { createAsyncThunk } from "@reduxjs/toolkit";
import { generateClient } from "aws-amplify/api";
import { SectionType } from "../../types/DatabaseType";
import { getSectionWithStudent, listSectionsWithSubjectEligibleDepartment } from "../../custom_graphql/customQueries";
import { createSection, deleteSection, updateSection } from "../../graphql/mutations";

const client = generateClient();

export const fetchSections = createAsyncThunk<SectionType[]>(
    "fetchSections",
    async (): Promise<SectionType[]> => {
        const response = await client.graphql({
            query: listSectionsWithSubjectEligibleDepartment,
        })

        return response.data.listSections.items;
    }
)

export const readSection = createAsyncThunk<SectionType, string>(
    "getSection",
    async (id: string): Promise<SectionType> => {
        const response = await client.graphql({
            query: getSectionWithStudent,
            variables: {
                id: id
            }
        })

        return response.data.getSection as SectionType;
    }
)

export const fetchTeacherSections = createAsyncThunk<SectionType[], string>(
    "fetchMySections",
    async (teacher: string): Promise<SectionType[]> => {
        const response = await client.graphql({
            query: listSectionsWithSubjectEligibleDepartment,
            variables: {
                filter: {
                    teacher: {
                        eq: teacher,
                    }
                }
            }
        })
        return response.data.listSections.items;
    }
)

export const addSection = createAsyncThunk<SectionType, {name: string, capacity: number, teacher: string, subjectID: string}>(
    "addSection",
    async ({name, capacity, teacher, subjectID}: {name: string, capacity: number, teacher: string, subjectID: string}): Promise<SectionType> => {
        const response = await client.graphql({
            query: createSection,
            variables: {
                input: {
                    name: name,
                    capacity: capacity,
                    teacher: teacher,
                    subjectID: subjectID,
                }
            }
        })

        return response.data.createSection as SectionType;
    }
)

export const removeSection = createAsyncThunk<string, string>(
    "removeSection",
    async (id: string): Promise<string> => {
        const response = await client.graphql({
            query: deleteSection,
            variables: {
                input: {
                    id: id,
                },
            },
        })
        return response.data.deleteSection.id;
    }
)

export const putSection = createAsyncThunk<SectionType, {id: string, name: string, capacity: number}>(
    "putSection",
    async ({id, name, capacity}: {id: string, name: string, capacity: number}): Promise<SectionType> => {
        const response = await client.graphql({
            query: updateSection,
            variables: {
                input: {
                    id: id,
                    name: name,
                    capacity: capacity,
                },
            },
        })

        return response.data.updateSection as SectionType;
    }
)