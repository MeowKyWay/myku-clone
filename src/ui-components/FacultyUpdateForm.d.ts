/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Faculty } from "../API.ts";
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
export declare type FacultyUpdateFormInputValues = {
    name?: string;
};
export declare type FacultyUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FacultyUpdateFormOverridesProps = {
    FacultyUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FacultyUpdateFormProps = React.PropsWithChildren<{
    overrides?: FacultyUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    faculty?: Faculty;
    onSubmit?: (fields: FacultyUpdateFormInputValues) => FacultyUpdateFormInputValues;
    onSuccess?: (fields: FacultyUpdateFormInputValues) => void;
    onError?: (fields: FacultyUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FacultyUpdateFormInputValues) => FacultyUpdateFormInputValues;
    onValidate?: FacultyUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FacultyUpdateForm(props: FacultyUpdateFormProps): React.ReactElement;
