import { createAsyncThunk } from "@reduxjs/toolkit";
import { generateClient } from "aws-amplify/api";
import { StudentSectionType } from "../../types/DatabaseType";
import { listStudentSections } from "../../graphql/queries";
import AuthUtils from "../../utility/AuthUtils";
import { SQS, SendMessageCommand, SendMessageCommandInput } from "@aws-sdk/client-sqs";
import awsconfig from "../../aws-exports";

const client = generateClient();

export const fetchStudentSections = createAsyncThunk<StudentSectionType[]>(
    "fetchStudentSections",
    async (): Promise<StudentSectionType[]> => {
        const response = await client.graphql({
            query: listStudentSections,
            variables: {
                filter: {
                    studentID: {
                        eq: (await AuthUtils.getCurrentUser()).attributes.sub,
                    }
                }
            }
        })
        console.log(response);

        return response.data.listStudentSections.items;

    }
)

export const addStudentSection = createAsyncThunk<StudentSectionType, { sectionID: string }>(
    "addStudentSection",
    async ({ sectionID }: { sectionID: string }): Promise<StudentSectionType> => {
        const SQSClient = new SQS({
            credentials: await AuthUtils.getCredentials(),
            region: awsconfig.aws_project_region,
        });

        const user = await AuthUtils.getCurrentUser();

        const input = { // SendMessageRequest
            QueueUrl: "https://sqs.ap-southeast-1.amazonaws.com/891377257682/enrollQueue.fifo", // required
            MessageBody: JSON.stringify({
                StudentID: user.attributes.sub,
                SectionID: sectionID,
            }), // required
            MessageGroupId: "enroll", // required
        } as SendMessageCommandInput;

        const command = new SendMessageCommand(input);
        const response = await SQSClient.send(command);

        return response as unknown as StudentSectionType;
    }
)

