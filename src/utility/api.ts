import axios from "axios";
import awsconfig from "../aws-exports";
import { UserGroup } from "../store/slices/userSlice";
import AuthUtils from "./AuthUtils";
import ObjectUtils from "./ObjectUtils";

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

    const authorizationToken = await AuthUtils.getAuthToken();

    const body = {
        UserPoolId: awsconfig.aws_user_pools_id,
        GroupName: groups,
    }

    const header = {
        'Content-Type': 'application/json',
        'authorizationToken': authorizationToken,
    }

    const response = await axios.post('https://63tw46cuod.execute-api.ap-southeast-1.amazonaws.com/default/listUserInGroup',
        body,
        { headers: header },
    );

    const users = ObjectUtils.convertAttributesObjectArray(response.data.Users)

    return users as ListUserInGroupOutput[];
}

export async function createUser({name, email, groups, departmentID}: {
    name: string,
    email: string,
    groups: UserGroup,
    departmentID: string,
}) {
    const authorizationToken = await AuthUtils.getAuthToken();

    const body = {
        UserPoolId: awsconfig.aws_user_pools_id,
        Region: awsconfig.aws_project_region,
        Name: name,
        Email: email,
        GroupName: groups,
        DepartmentId: departmentID,
    }

    const header = {
        'Content-Type': 'application/json',
        'authorizationToken': authorizationToken,
    }

    const response = await axios.post('https://63tw46cuod.execute-api.ap-southeast-1.amazonaws.com/default/adminCreateUser',
        body,
        { headers: header },
    );

    return response.data;
}