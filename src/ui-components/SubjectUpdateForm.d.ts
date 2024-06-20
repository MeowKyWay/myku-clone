/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Subject } from "../API.ts";
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
export declare type SubjectUpdateFormInputValues = {
    name?: string;
    credit?: number;
};
export declare type SubjectUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    credit?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SubjectUpdateFormOverridesProps = {
    SubjectUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    credit?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SubjectUpdateFormProps = React.PropsWithChildren<{
    overrides?: SubjectUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    subject?: Subject;
    onSubmit?: (fields: SubjectUpdateFormInputValues) => SubjectUpdateFormInputValues;
    onSuccess?: (fields: SubjectUpdateFormInputValues) => void;
    onError?: (fields: SubjectUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SubjectUpdateFormInputValues) => SubjectUpdateFormInputValues;
    onValidate?: SubjectUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SubjectUpdateForm(props: SubjectUpdateFormProps): React.ReactElement;
