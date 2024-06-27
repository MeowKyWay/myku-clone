import * as APITypes from "../API";
import * as CustomAPITypes from "./customAPI";

type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const listDepartmentsWithFaculty = /* GraphQL */ `query ListDepartments(
    $filter: ModelDepartmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDepartments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        faculty {
            id
            name
        }
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

export const listSubjectsWithDepartment = /* GraphQL */ `query ListSubjects(
    $filter: ModelSubjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        credit
        department {
          id
          name
        }
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

export const listSubjectWithSections = /* GraphQL */ `query ListSubjects(
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
      department {
          id
          name
          facultyID
      }
      sections {
        items {
          id
          name
          capacity
          teacher
          subjectID
          eligibleDepartments {
            items {
              id
              sectionID
              departmentID
              department {
                id
                name
              }
            }
          }
          createdAt
          updatedAt
        }
      }
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
  CustomAPITypes.ListSubjectsWithSectionsQuery
>;

export const listSectionsWithSubject = /* GraphQL */ `query ListSections(
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
      subject {
        id
        name
      }
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

export const listSectionsWithSubjectEligibleDepartment = /* GraphQL */ `query ListSections(
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
      subject {
        id
        name
      }
      eligibleDepartments {
        items {
          id
          department {
            id
            name
          }
        }
      }
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
  CustomAPITypes.ListSectionsWithSubjectEligibleDepartmentsQuery
>;

export const listMySections = /* GraphQL */ `query ListStudentSections(
  $filter: ModelStudentSectionFilterInput
  $limit: Int
  $nextToken: String
) {
  listStudentSections(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      studentID
      sectionID
      section {
        id
        name
        capacity
        teacher
        subject {
          id
          name
        }
      }
    }
    nextToken
  }
}
` as GeneratedQuery<
  APITypes.ListStudentSectionsQueryVariables,
  CustomAPITypes.ListMySectionsQuery>;