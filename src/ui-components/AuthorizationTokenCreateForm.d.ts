/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type AuthorizationTokenCreateFormInputValues = {
    token?: string;
    group?: string;
};
export declare type AuthorizationTokenCreateFormValidationValues = {
    token?: ValidationFunction<string>;
    group?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AuthorizationTokenCreateFormOverridesProps = {
    AuthorizationTokenCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    token?: PrimitiveOverrideProps<TextFieldProps>;
    group?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AuthorizationTokenCreateFormProps = React.PropsWithChildren<{
    overrides?: AuthorizationTokenCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AuthorizationTokenCreateFormInputValues) => AuthorizationTokenCreateFormInputValues;
    onSuccess?: (fields: AuthorizationTokenCreateFormInputValues) => void;
    onError?: (fields: AuthorizationTokenCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AuthorizationTokenCreateFormInputValues) => AuthorizationTokenCreateFormInputValues;
    onValidate?: AuthorizationTokenCreateFormValidationValues;
} & React.CSSProperties>;
export default function AuthorizationTokenCreateForm(props: AuthorizationTokenCreateFormProps): React.ReactElement;
