import { fetchAuthSession, fetchUserAttributes } from "aws-amplify/auth";
import { CurrentUserType } from "../store/slices/userSlice";
import { getAuthorizationToken } from "../graphql/queries";
import { generateClient } from "aws-amplify/api";

export default class AuthUtils {

    static client = generateClient();

    static async getCurrentUser() {

        const authSession = await fetchAuthSession();

        const userAttribute = await fetchUserAttributes();
        const userGroup = authSession.tokens?.accessToken.payload["cognito:groups"]?.toString();

        const currentUser = {
            groups: userGroup,
            attributes: userAttribute,
        } as CurrentUserType
        return currentUser;
    }

    static async getAuthToken() {
        try {
            const response = await this.client.graphql({
                query: getAuthorizationToken,
                variables: {
                    id: "ADMINAUTHTOKEN"
                }
            });
            return response.data.getAuthorizationToken?.token;
        }
        catch (error: unknown) {
            return "Access Denied";
        }
    }

    static async getCredentials() {
        const session = await fetchAuthSession();

        return session.credentials;
    }
}