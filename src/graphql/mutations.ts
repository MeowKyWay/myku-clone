/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createAuthorizationToken = /* GraphQL */ `mutation CreateAuthorizationToken(
  $input: CreateAuthorizationTokenInput!
  $condition: ModelAuthorizationTokenConditionInput
) {
  createAuthorizationToken(input: $input, condition: $condition) {
    id
    token
    group
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateAuthorizationTokenMutationVariables,
  APITypes.CreateAuthorizationTokenMutation
>;
export const updateAuthorizationToken = /* GraphQL */ `mutation UpdateAuthorizationToken(
  $input: UpdateAuthorizationTokenInput!
  $condition: ModelAuthorizationTokenConditionInput
) {
  updateAuthorizationToken(input: $input, condition: $condition) {
    id
    token
    group
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateAuthorizationTokenMutationVariables,
  APITypes.UpdateAuthorizationTokenMutation
>;
export const deleteAuthorizationToken = /* GraphQL */ `mutation DeleteAuthorizationToken(
  $input: DeleteAuthorizationTokenInput!
  $condition: ModelAuthorizationTokenConditionInput
) {
  deleteAuthorizationToken(input: $input, condition: $condition) {
    id
    token
    group
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteAuthorizationTokenMutationVariables,
  APITypes.DeleteAuthorizationTokenMutation
>;
export const createFaculty = /* GraphQL */ `mutation CreateFaculty(
  $input: CreateFacultyInput!
  $condition: ModelFacultyConditionInput
) {
  createFaculty(input: $input, condition: $condition) {
    id
    name
    departments {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateFacultyMutationVariables,
  APITypes.CreateFacultyMutation
>;
export const updateFaculty = /* GraphQL */ `mutation UpdateFaculty(
  $input: UpdateFacultyInput!
  $condition: ModelFacultyConditionInput
) {
  updateFaculty(input: $input, condition: $condition) {
    id
    name
    departments {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateFacultyMutationVariables,
  APITypes.UpdateFacultyMutation
>;
export const deleteFaculty = /* GraphQL */ `mutation DeleteFaculty(
  $input: DeleteFacultyInput!
  $condition: ModelFacultyConditionInput
) {
  deleteFaculty(input: $input, condition: $condition) {
    id
    name
    departments {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteFacultyMutationVariables,
  APITypes.DeleteFacultyMutation
>;
export const createDepartment = /* GraphQL */ `mutation CreateDepartment(
  $input: CreateDepartmentInput!
  $condition: ModelDepartmentConditionInput
) {
  createDepartment(input: $input, condition: $condition) {
    id
    name
    facultyID
    faculty {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    subjects {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateDepartmentMutationVariables,
  APITypes.CreateDepartmentMutation
>;
export const updateDepartment = /* GraphQL */ `mutation UpdateDepartment(
  $input: UpdateDepartmentInput!
  $condition: ModelDepartmentConditionInput
) {
  updateDepartment(input: $input, condition: $condition) {
    id
    name
    facultyID
    faculty {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    subjects {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateDepartmentMutationVariables,
  APITypes.UpdateDepartmentMutation
>;
export const deleteDepartment = /* GraphQL */ `mutation DeleteDepartment(
  $input: DeleteDepartmentInput!
  $condition: ModelDepartmentConditionInput
) {
  deleteDepartment(input: $input, condition: $condition) {
    id
    name
    facultyID
    faculty {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    subjects {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteDepartmentMutationVariables,
  APITypes.DeleteDepartmentMutation
>;
export const createSubject = /* GraphQL */ `mutation CreateSubject(
  $input: CreateSubjectInput!
  $condition: ModelSubjectConditionInput
) {
  createSubject(input: $input, condition: $condition) {
    id
    name
    credit
    teacher
    departmentID
    department {
      id
      name
      facultyID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateSubjectMutationVariables,
  APITypes.CreateSubjectMutation
>;
export const updateSubject = /* GraphQL */ `mutation UpdateSubject(
  $input: UpdateSubjectInput!
  $condition: ModelSubjectConditionInput
) {
  updateSubject(input: $input, condition: $condition) {
    id
    name
    credit
    teacher
    departmentID
    department {
      id
      name
      facultyID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateSubjectMutationVariables,
  APITypes.UpdateSubjectMutation
>;
export const deleteSubject = /* GraphQL */ `mutation DeleteSubject(
  $input: DeleteSubjectInput!
  $condition: ModelSubjectConditionInput
) {
  deleteSubject(input: $input, condition: $condition) {
    id
    name
    credit
    teacher
    departmentID
    department {
      id
      name
      facultyID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteSubjectMutationVariables,
  APITypes.DeleteSubjectMutation
>;
