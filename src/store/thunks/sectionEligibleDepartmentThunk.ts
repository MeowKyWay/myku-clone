import { createAsyncThunk } from "@reduxjs/toolkit";
import { SectionEligibleDepartmentType } from "../../types/DatabaseType";
import { generateClient } from "aws-amplify/api";
import { createSectionEligibleDepartment, deleteSectionEligibleDepartment } from "../../graphql/mutations";

const client = generateClient();

export const addSectionEligibleDepartment = createAsyncThunk<SectionEligibleDepartmentType, { sectionID: string, departmentID: string }>(
    "addEligible",
    async ({ sectionID, departmentID }: { sectionID: string, departmentID: string }): Promise<SectionEligibleDepartmentType> => {
        const response = await client.graphql({
            query: createSectionEligibleDepartment,
            variables: {
                input: {
                    sectionID: sectionID,
                    departmentID: departmentID,
                }
            }
        })
        return response.data.createSectionEligibleDepartment;
    }
)

export const removeSectionEligibleDepartment = createAsyncThunk<{id: string, sectionID: string}, string>(
    "removeEligible",
    async (id: string): Promise<{id: string, sectionID: string}> => {
        const response = await client.graphql({
            query: deleteSectionEligibleDepartment,
            variables: {
                input: {
                    id: id,
                },
            },
        })
        return { 
            id: response.data.deleteSectionEligibleDepartment.id,
            sectionID: response.data.deleteSectionEligibleDepartment.sectionID
        };
    }
)