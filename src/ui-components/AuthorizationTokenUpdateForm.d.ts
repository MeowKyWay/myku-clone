/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { AuthorizationToken } from "../API.ts";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AuthorizationTokenUpdateFormInputValues = {
    token?: string;
    group?: string;
};
export declare type AuthorizationTokenUpdateFormValidationValues = {
    token?: ValidationFunction<string>;
    group?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AuthorizationTokenUpdateFormOverridesProps = {
    AuthorizationTokenUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    token?: PrimitiveOverrideProps<TextFieldProps>;
    group?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AuthorizationTokenUpdateFormProps = React.PropsWithChildren<{
    overrides?: AuthorizationTokenUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    authorizationToken?: AuthorizationToken;
    onSubmit?: (fields: AuthorizationTokenUpdateFormInputValues) => AuthorizationTokenUpdateFormInputValues;
    onSuccess?: (fields: AuthorizationTokenUpdateFormInputValues) => void;
    onError?: (fields: AuthorizationTokenUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AuthorizationTokenUpdateFormInputValues) => AuthorizationTokenUpdateFormInputValues;
    onValidate?: AuthorizationTokenUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AuthorizationTokenUpdateForm(props: AuthorizationTokenUpdateFormProps): React.ReactElement;
