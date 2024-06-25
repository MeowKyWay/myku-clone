import awsconfig from "../aws-exports";
import { UserGroup } from "../store/slices/userSlice";
import AuthUtils from "./AuthUtils";
import ObjectUtils from "./ObjectUtils";
import { Lambda } from "@aws-sdk/client-lambda";

export interface ListUserInGroupOutput {
    Attributes: {
        email: string;
        name: string;
        sub: string;
        [key: string]: string;
    };
    Enabled: boolean;
    UserCreateDate: string;
    UserLastModifiedDate: string;
    UserStatus: string;
    Username: string;
}


export async function listUserInGroup(groups: UserGroup) {

    const lambda = new Lambda({
        credentials: (await AuthUtils.getCredentials()),
        region: 'ap-southeast-1',
    });

    const response = await lambda.invoke({
        FunctionName: 'arn:aws:lambda:ap-southeast-1:891377257682:function:listUserInGroup',
        InvocationType: 'RequestResponse',
        Payload: JSON.stringify({
            UserPoolId: awsconfig.aws_user_pools_id,
            GroupName: groups,
        }),
    });

    const users = ObjectUtils.lambdaDecode(response).Users;

    const usersWithAttributes = ObjectUtils.convertAttributesObjectArray(users);

    return usersWithAttributes as ListUserInGroupOutput[];
}

export async function createUser({ name, email, groups, departmentID }: {
    name: string,
    email: string,
    groups: UserGroup,
    departmentID: string,
}) {

    const lambda = new Lambda({
        credentials: (await AuthUtils.getCredentials()),
        region: 'ap-southeast-1',
    });

    const response = await lambda.invoke({
        FunctionName: 'arn:aws:lambda:ap-southeast-1:891377257682:function:adminCreateUser',
        InvocationType: 'RequestResponse',
        Payload: JSON.stringify({
            UserPoolId: awsconfig.aws_user_pools_id,
            Name: name,
            Email: email,
            GroupName: groups,
            DepartmentId: departmentID,
        }),
    });

    const lambdaResponse = ObjectUtils.lambdaDecode(response);

    const user = ObjectUtils.convertAttributesArray(lambdaResponse.createUserResponse.User)

    return user;
}