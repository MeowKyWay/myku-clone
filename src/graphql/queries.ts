/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getAuthorizationToken = /* GraphQL */ `query GetAuthorizationToken($id: ID!) {
  getAuthorizationToken(id: $id) {
    id
    token
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAuthorizationTokenQueryVariables,
  APITypes.GetAuthorizationTokenQuery
>;
export const listAuthorizationTokens = /* GraphQL */ `query ListAuthorizationTokens(
  $filter: ModelAuthorizationTokenFilterInput
  $limit: Int
  $nextToken: String
) {
  listAuthorizationTokens(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      token
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAuthorizationTokensQueryVariables,
  APITypes.ListAuthorizationTokensQuery
>;
export const getFaculty = /* GraphQL */ `query GetFaculty($id: ID!) {
  getFaculty(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetFacultyQueryVariables,
  APITypes.GetFacultyQuery
>;
export const listFaculties = /* GraphQL */ `query ListFaculties(
  $filter: ModelFacultyFilterInput
  $limit: Int
  $nextToken: String
) {
  listFaculties(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFacultiesQueryVariables,
  APITypes.ListFacultiesQuery
>;
export const getDepartment = /* GraphQL */ `query GetDepartment($id: ID!) {
  getDepartment(id: $id) {
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetDepartmentQueryVariables,
  APITypes.GetDepartmentQuery
>;
export const listDepartments = /* GraphQL */ `query ListDepartments(
  $filter: ModelDepartmentFilterInput
  $limit: Int
  $nextToken: String
) {
  listDepartments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      facultyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDepartmentsQueryVariables,
  APITypes.ListDepartmentsQuery
>;
export const departmentsByFacultyID = /* GraphQL */ `query DepartmentsByFacultyID(
  $facultyID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelDepartmentFilterInput
  $limit: Int
  $nextToken: String
) {
  departmentsByFacultyID(
    facultyID: $facultyID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      facultyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.DepartmentsByFacultyIDQueryVariables,
  APITypes.DepartmentsByFacultyIDQuery
>;
