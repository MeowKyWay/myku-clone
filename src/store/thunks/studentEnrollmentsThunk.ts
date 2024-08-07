import { createAsyncThunk } from "@reduxjs/toolkit";
import { generateClient } from "aws-amplify/api";
import { StudentEnrollmentType } from "../../types/DatabaseType";
import { createStudentEnrollment, updateStudentEnrollment } from "../../graphql/mutations";
import { listStudentEnrollments } from "../../graphql/queries";
import AuthUtils from "../../utility/AuthUtils";
import { listMyEnrollments } from "../../custom_graphql/customQueries";

const client = generateClient();

export const fetchMyEnrollment = createAsyncThunk<StudentEnrollmentType[]>(
    "fetchMyEnrollment",
    async (): Promise<StudentEnrollmentType[]> => {
        const response = await client.graphql({
            query: listMyEnrollments,
            variables: {
                filter: {
                    studentID: {
                        eq: (await AuthUtils.getCurrentUser()).attributes.sub,
                    }
                }
            }
        })

        // console.log(response.data.listStudentEnrollments.items);
        return response.data.listStudentEnrollments.items;
    }
)

export const fetchSectionStudentEnrollment = createAsyncThunk<{data: StudentEnrollmentType[], sectionID: string}, string>(
    "fetchSectionStudentEnrollment",
    async (sectionID: string): Promise<{data: StudentEnrollmentType[], sectionID: string}> => {
        const response = await client.graphql({
            query: listStudentEnrollments,
            variables: {
                filter: {
                    sectionID: {
                        eq: sectionID,
                    }
                }
            }
        })

        return {
            data: response.data.listStudentEnrollments.items,
            sectionID: sectionID,
        };
    }
)

export const addStudentEnrollment = createAsyncThunk<StudentEnrollmentType, string>(
    "addStudentEnrollment",
    async (sectionID: string): Promise<StudentEnrollmentType> => {

        const user = await AuthUtils.getCurrentUser();

        const response = await client.graphql({
            query: createStudentEnrollment,
            variables: {
                input: {
                    id: user.attributes.sub + ":" + sectionID,
                    studentID: user.attributes.sub as string,
                    name: user.attributes.name as string,
                    sectionID: sectionID,
                    status: "Pending",
                }
            }
        })

        return response.data.createStudentEnrollment as StudentEnrollmentType;
    }
)

export const putStudentEnrollment = createAsyncThunk<StudentEnrollmentType, {id: string, status: string}>(
    "putSection",
    async ({id, status}: {id: string, status: string}): Promise<StudentEnrollmentType> => {
        const response = await client.graphql({
            query: updateStudentEnrollment,
            variables: {
                input: {
                    id: id,
                    status: status,
                },
            },
        })

        return response.data.updateStudentEnrollment as StudentEnrollmentType;
    }
)