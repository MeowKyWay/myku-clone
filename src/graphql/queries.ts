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
    group
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
      group
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
    subjects {
      nextToken
      __typename
    }
    eligibleSubjects {
      nextToken
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
export const getSubject = /* GraphQL */ `query GetSubject($id: ID!) {
  getSubject(id: $id) {
    id
    name
    credit
    departmentID
    department {
      id
      name
      facultyID
      createdAt
      updatedAt
      __typename
    }
    sections {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetSubjectQueryVariables,
  APITypes.GetSubjectQuery
>;
export const listSubjects = /* GraphQL */ `query ListSubjects(
  $filter: ModelSubjectFilterInput
  $limit: Int
  $nextToken: String
) {
  listSubjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      credit
      departmentID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSubjectsQueryVariables,
  APITypes.ListSubjectsQuery
>;
export const getSection = /* GraphQL */ `query GetSection($id: ID!) {
  getSection(id: $id) {
    id
    name
    capacity
    teacher
    subjectID
    subject {
      id
      name
      credit
      departmentID
      createdAt
      updatedAt
      __typename
    }
    eligibleDepartments {
      nextToken
      __typename
    }
    students {
      nextToken
      __typename
    }
    studentEnrollments {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetSectionQueryVariables,
  APITypes.GetSectionQuery
>;
export const listSections = /* GraphQL */ `query ListSections(
  $filter: ModelSectionFilterInput
  $limit: Int
  $nextToken: String
) {
  listSections(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      capacity
      teacher
      subjectID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSectionsQueryVariables,
  APITypes.ListSectionsQuery
>;
export const getSectionEligibleDepartment = /* GraphQL */ `query GetSectionEligibleDepartment($id: ID!) {
  getSectionEligibleDepartment(id: $id) {
    id
    sectionID
    section {
      id
      name
      capacity
      teacher
      subjectID
      createdAt
      updatedAt
      __typename
    }
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
` as GeneratedQuery<
  APITypes.GetSectionEligibleDepartmentQueryVariables,
  APITypes.GetSectionEligibleDepartmentQuery
>;
export const listSectionEligibleDepartments = /* GraphQL */ `query ListSectionEligibleDepartments(
  $filter: ModelSectionEligibleDepartmentFilterInput
  $limit: Int
  $nextToken: String
) {
  listSectionEligibleDepartments(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      sectionID
      departmentID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSectionEligibleDepartmentsQueryVariables,
  APITypes.ListSectionEligibleDepartmentsQuery
>;
export const getStudentSection = /* GraphQL */ `query GetStudentSection($id: ID!) {
  getStudentSection(id: $id) {
    id
    studentID
    name
    sectionID
    section {
      id
      name
      capacity
      teacher
      subjectID
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
  APITypes.GetStudentSectionQueryVariables,
  APITypes.GetStudentSectionQuery
>;
export const listStudentSections = /* GraphQL */ `query ListStudentSections(
  $filter: ModelStudentSectionFilterInput
  $limit: Int
  $nextToken: String
) {
  listStudentSections(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      studentID
      name
      sectionID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListStudentSectionsQueryVariables,
  APITypes.ListStudentSectionsQuery
>;
export const getStudentEnrollment = /* GraphQL */ `query GetStudentEnrollment($id: ID!) {
  getStudentEnrollment(id: $id) {
    id
    studentID
    name
    sectionID
    section {
      id
      name
      capacity
      teacher
      subjectID
      createdAt
      updatedAt
      __typename
    }
    status
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetStudentEnrollmentQueryVariables,
  APITypes.GetStudentEnrollmentQuery
>;
export const listStudentEnrollments = /* GraphQL */ `query ListStudentEnrollments(
  $filter: ModelStudentEnrollmentFilterInput
  $limit: Int
  $nextToken: String
) {
  listStudentEnrollments(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      studentID
      name
      sectionID
      status
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListStudentEnrollmentsQueryVariables,
  APITypes.ListStudentEnrollmentsQuery
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
export const subjectsByDepartmentID = /* GraphQL */ `query SubjectsByDepartmentID(
  $departmentID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelSubjectFilterInput
  $limit: Int
  $nextToken: String
) {
  subjectsByDepartmentID(
    departmentID: $departmentID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      credit
      departmentID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SubjectsByDepartmentIDQueryVariables,
  APITypes.SubjectsByDepartmentIDQuery
>;
export const sectionsBySubjectID = /* GraphQL */ `query SectionsBySubjectID(
  $subjectID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelSectionFilterInput
  $limit: Int
  $nextToken: String
) {
  sectionsBySubjectID(
    subjectID: $subjectID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      capacity
      teacher
      subjectID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SectionsBySubjectIDQueryVariables,
  APITypes.SectionsBySubjectIDQuery
>;
export const sectionEligibleDepartmentsBySectionID = /* GraphQL */ `query SectionEligibleDepartmentsBySectionID(
  $sectionID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelSectionEligibleDepartmentFilterInput
  $limit: Int
  $nextToken: String
) {
  sectionEligibleDepartmentsBySectionID(
    sectionID: $sectionID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      sectionID
      departmentID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SectionEligibleDepartmentsBySectionIDQueryVariables,
  APITypes.SectionEligibleDepartmentsBySectionIDQuery
>;
export const sectionEligibleDepartmentsByDepartmentID = /* GraphQL */ `query SectionEligibleDepartmentsByDepartmentID(
  $departmentID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelSectionEligibleDepartmentFilterInput
  $limit: Int
  $nextToken: String
) {
  sectionEligibleDepartmentsByDepartmentID(
    departmentID: $departmentID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      sectionID
      departmentID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SectionEligibleDepartmentsByDepartmentIDQueryVariables,
  APITypes.SectionEligibleDepartmentsByDepartmentIDQuery
>;
export const studentSectionsBySectionID = /* GraphQL */ `query StudentSectionsBySectionID(
  $sectionID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelStudentSectionFilterInput
  $limit: Int
  $nextToken: String
) {
  studentSectionsBySectionID(
    sectionID: $sectionID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      studentID
      name
      sectionID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.StudentSectionsBySectionIDQueryVariables,
  APITypes.StudentSectionsBySectionIDQuery
>;
export const studentEnrollmentsBySectionID = /* GraphQL */ `query StudentEnrollmentsBySectionID(
  $sectionID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelStudentEnrollmentFilterInput
  $limit: Int
  $nextToken: String
) {
  studentEnrollmentsBySectionID(
    sectionID: $sectionID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      studentID
      name
      sectionID
      status
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.StudentEnrollmentsBySectionIDQueryVariables,
  APITypes.StudentEnrollmentsBySectionIDQuery
>;
