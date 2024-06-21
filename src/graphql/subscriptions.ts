/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateAuthorizationToken = /* GraphQL */ `subscription OnCreateAuthorizationToken(
  $filter: ModelSubscriptionAuthorizationTokenFilterInput
) {
  onCreateAuthorizationToken(filter: $filter) {
    id
    token
    group
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateAuthorizationTokenSubscriptionVariables,
  APITypes.OnCreateAuthorizationTokenSubscription
>;
export const onUpdateAuthorizationToken = /* GraphQL */ `subscription OnUpdateAuthorizationToken(
  $filter: ModelSubscriptionAuthorizationTokenFilterInput
) {
  onUpdateAuthorizationToken(filter: $filter) {
    id
    token
    group
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateAuthorizationTokenSubscriptionVariables,
  APITypes.OnUpdateAuthorizationTokenSubscription
>;
export const onDeleteAuthorizationToken = /* GraphQL */ `subscription OnDeleteAuthorizationToken(
  $filter: ModelSubscriptionAuthorizationTokenFilterInput
) {
  onDeleteAuthorizationToken(filter: $filter) {
    id
    token
    group
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteAuthorizationTokenSubscriptionVariables,
  APITypes.OnDeleteAuthorizationTokenSubscription
>;
export const onCreateFaculty = /* GraphQL */ `subscription OnCreateFaculty($filter: ModelSubscriptionFacultyFilterInput) {
  onCreateFaculty(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateFacultySubscriptionVariables,
  APITypes.OnCreateFacultySubscription
>;
export const onUpdateFaculty = /* GraphQL */ `subscription OnUpdateFaculty($filter: ModelSubscriptionFacultyFilterInput) {
  onUpdateFaculty(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateFacultySubscriptionVariables,
  APITypes.OnUpdateFacultySubscription
>;
export const onDeleteFaculty = /* GraphQL */ `subscription OnDeleteFaculty($filter: ModelSubscriptionFacultyFilterInput) {
  onDeleteFaculty(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteFacultySubscriptionVariables,
  APITypes.OnDeleteFacultySubscription
>;
export const onCreateDepartment = /* GraphQL */ `subscription OnCreateDepartment(
  $filter: ModelSubscriptionDepartmentFilterInput
) {
  onCreateDepartment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateDepartmentSubscriptionVariables,
  APITypes.OnCreateDepartmentSubscription
>;
export const onUpdateDepartment = /* GraphQL */ `subscription OnUpdateDepartment(
  $filter: ModelSubscriptionDepartmentFilterInput
) {
  onUpdateDepartment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateDepartmentSubscriptionVariables,
  APITypes.OnUpdateDepartmentSubscription
>;
export const onDeleteDepartment = /* GraphQL */ `subscription OnDeleteDepartment(
  $filter: ModelSubscriptionDepartmentFilterInput
) {
  onDeleteDepartment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteDepartmentSubscriptionVariables,
  APITypes.OnDeleteDepartmentSubscription
>;
export const onCreateSubject = /* GraphQL */ `subscription OnCreateSubject($filter: ModelSubscriptionSubjectFilterInput) {
  onCreateSubject(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSubjectSubscriptionVariables,
  APITypes.OnCreateSubjectSubscription
>;
export const onUpdateSubject = /* GraphQL */ `subscription OnUpdateSubject($filter: ModelSubscriptionSubjectFilterInput) {
  onUpdateSubject(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSubjectSubscriptionVariables,
  APITypes.OnUpdateSubjectSubscription
>;
export const onDeleteSubject = /* GraphQL */ `subscription OnDeleteSubject($filter: ModelSubscriptionSubjectFilterInput) {
  onDeleteSubject(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSubjectSubscriptionVariables,
  APITypes.OnDeleteSubjectSubscription
>;
export const onCreateSection = /* GraphQL */ `subscription OnCreateSection($filter: ModelSubscriptionSectionFilterInput) {
  onCreateSection(filter: $filter) {
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateSectionSubscriptionVariables,
  APITypes.OnCreateSectionSubscription
>;
export const onUpdateSection = /* GraphQL */ `subscription OnUpdateSection($filter: ModelSubscriptionSectionFilterInput) {
  onUpdateSection(filter: $filter) {
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateSectionSubscriptionVariables,
  APITypes.OnUpdateSectionSubscription
>;
export const onDeleteSection = /* GraphQL */ `subscription OnDeleteSection($filter: ModelSubscriptionSectionFilterInput) {
  onDeleteSection(filter: $filter) {
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSectionSubscriptionVariables,
  APITypes.OnDeleteSectionSubscription
>;
