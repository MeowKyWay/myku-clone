import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
    DynamoDBDocumentClient,
    PutCommand,
    ScanCommand,
} from "@aws-sdk/lib-dynamodb";

export const handler = async (event, context) => {

    const response = (body, status) => {
        return {
            'statusCode': status,
            'body': JSON.stringify(body),
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, authorizationToken',
            }
        }
    }

    const client = new DynamoDBClient({});

    const dynamo = DynamoDBDocumentClient.from(client);

    const tableName = "StudentSection-swyqshvfbrcmzfzloqwh5xixxm-dev";

    const records = event['Records']

    for (let i = 0; i < records.length; i++) {
        const body = JSON.parse(records[i]['body']);
        const studentID = body.StudentID;
        const sectionID = body.SectionID;

        const input = {
            TableName: "YourTableName",
            FilterExpression: "#id = :studentID",
            ExpressionAttributeNames: {
                "#id": "studentID"
            },
            ExpressionAttributeValues: {
                ":studentID": { S: studentID }
            }
        };

        try {
            const res = await dynamo.send(
                new ScanCommand(input)
            );

            console.log(res)
        }
        catch (err) {
            console.log(err)
        }

        const now = new Date().toISOString();

        // try {
        //     const res = await dynamo.send(
        //         new PutCommand({
        //             TableName: tableName,
        //             Item: {
        //                 id: studentID + ":" + sectionID,
        //                 studentID: studentID,
        //                 sectionID: sectionID,
        //                 createdAt: now,
        //                 updatedAt: now,
        //                 __typename: "StudentSection"
        //             },
        //         })
        //     );
        //     console.log(res);
        // }
        // catch (err) {
        //     console.log(err);
        // }
    }

    return response('Success', 200);
};