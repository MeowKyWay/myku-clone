/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateAuthorizationTokenInput = {
  id?: string | null,
  token: string,
  group: string,
};

export type ModelAuthorizationTokenConditionInput = {
  token?: ModelStringInput | null,
  group?: ModelStringInput | null,
  and?: Array< ModelAuthorizationTokenConditionInput | null > | null,
  or?: Array< ModelAuthorizationTokenConditionInput | null > | null,
  not?: ModelAuthorizationTokenConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type AuthorizationToken = {
  __typename: "AuthorizationToken",
  id: string,
  token: string,
  group: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAuthorizationTokenInput = {
  id: string,
  token?: string | null,
  group?: string | null,
};

export type DeleteAuthorizationTokenInput = {
  id: string,
};

export type CreateFacultyInput = {
  id?: string | null,
  name: string,
};

export type ModelFacultyConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelFacultyConditionInput | null > | null,
  or?: Array< ModelFacultyConditionInput | null > | null,
  not?: ModelFacultyConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type Faculty = {
  __typename: "Faculty",
  id: string,
  name: string,
  departments?: ModelDepartmentConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelDepartmentConnection = {
  __typename: "ModelDepartmentConnection",
  items:  Array<Department | null >,
  nextToken?: string | null,
};

export type Department = {
  __typename: "Department",
  id: string,
  name: string,
  facultyID: string,
  faculty?: Faculty | null,
  subjects?: ModelSubjectConnection | null,
  eligibleSubjects?: ModelSectionEligibleDepartmentConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelSubjectConnection = {
  __typename: "ModelSubjectConnection",
  items:  Array<Subject | null >,
  nextToken?: string | null,
};

export type Subject = {
  __typename: "Subject",
  id: string,
  name: string,
  credit: number,
  departmentID: string,
  department?: Department | null,
  sections?: ModelSectionConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelSectionConnection = {
  __typename: "ModelSectionConnection",
  items:  Array<Section | null >,
  nextToken?: string | null,
};

export type Section = {
  __typename: "Section",
  id: string,
  name: string,
  capacity: number,
  teacher: string,
  subjectID: string,
  subject?: Subject | null,
  eligibleDepartments?: ModelSectionEligibleDepartmentConnection | null,
  students?: ModelStudentSectionConnection | null,
  studentEnrollment?: ModelStudentEnrollmentConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelSectionEligibleDepartmentConnection = {
  __typename: "ModelSectionEligibleDepartmentConnection",
  items:  Array<SectionEligibleDepartment | null >,
  nextToken?: string | null,
};

export type SectionEligibleDepartment = {
  __typename: "SectionEligibleDepartment",
  id: string,
  sectionID: string,
  section?: Section | null,
  departmentID: string,
  department?: Department | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelStudentSectionConnection = {
  __typename: "ModelStudentSectionConnection",
  items:  Array<StudentSection | null >,
  nextToken?: string | null,
};

export type StudentSection = {
  __typename: "StudentSection",
  id: string,
  studentID: string,
  name: string,
  sectionID: string,
  section?: Section | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelStudentEnrollmentConnection = {
  __typename: "ModelStudentEnrollmentConnection",
  items:  Array<StudentEnrollment | null >,
  nextToken?: string | null,
};

export type StudentEnrollment = {
  __typename: "StudentEnrollment",
  id: string,
  studentID: string,
  name: string,
  sectionID: string,
  section?: Section | null,
  status: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateFacultyInput = {
  id: string,
  name?: string | null,
};

export type DeleteFacultyInput = {
  id: string,
};

export type CreateDepartmentInput = {
  id?: string | null,
  name: string,
  facultyID: string,
};

export type ModelDepartmentConditionInput = {
  name?: ModelStringInput | null,
  facultyID?: ModelIDInput | null,
  and?: Array< ModelDepartmentConditionInput | null > | null,
  or?: Array< ModelDepartmentConditionInput | null > | null,
  not?: ModelDepartmentConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateDepartmentInput = {
  id: string,
  name?: string | null,
  facultyID?: string | null,
};

export type DeleteDepartmentInput = {
  id: string,
};

export type CreateSubjectInput = {
  id?: string | null,
  name: string,
  credit: number,
  departmentID: string,
};

export type ModelSubjectConditionInput = {
  name?: ModelStringInput | null,
  credit?: ModelIntInput | null,
  departmentID?: ModelIDInput | null,
  and?: Array< ModelSubjectConditionInput | null > | null,
  or?: Array< ModelSubjectConditionInput | null > | null,
  not?: ModelSubjectConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateSubjectInput = {
  id: string,
  name?: string | null,
  credit?: number | null,
  departmentID?: string | null,
};

export type DeleteSubjectInput = {
  id: string,
};

export type CreateSectionInput = {
  id?: string | null,
  name: string,
  capacity: number,
  teacher: string,
  subjectID: string,
};

export type ModelSectionConditionInput = {
  name?: ModelStringInput | null,
  capacity?: ModelIntInput | null,
  teacher?: ModelStringInput | null,
  subjectID?: ModelIDInput | null,
  and?: Array< ModelSectionConditionInput | null > | null,
  or?: Array< ModelSectionConditionInput | null > | null,
  not?: ModelSectionConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateSectionInput = {
  id: string,
  name?: string | null,
  capacity?: number | null,
  teacher?: string | null,
  subjectID?: string | null,
};

export type DeleteSectionInput = {
  id: string,
};

export type CreateSectionEligibleDepartmentInput = {
  id?: string | null,
  sectionID: string,
  departmentID: string,
};

export type ModelSectionEligibleDepartmentConditionInput = {
  sectionID?: ModelIDInput | null,
  departmentID?: ModelIDInput | null,
  and?: Array< ModelSectionEligibleDepartmentConditionInput | null > | null,
  or?: Array< ModelSectionEligibleDepartmentConditionInput | null > | null,
  not?: ModelSectionEligibleDepartmentConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateSectionEligibleDepartmentInput = {
  id: string,
  sectionID?: string | null,
  departmentID?: string | null,
};

export type DeleteSectionEligibleDepartmentInput = {
  id: string,
};

export type CreateStudentSectionInput = {
  id?: string | null,
  studentID: string,
  name: string,
  sectionID: string,
};

export type ModelStudentSectionConditionInput = {
  studentID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  sectionID?: ModelIDInput | null,
  and?: Array< ModelStudentSectionConditionInput | null > | null,
  or?: Array< ModelStudentSectionConditionInput | null > | null,
  not?: ModelStudentSectionConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateStudentSectionInput = {
  id: string,
  studentID?: string | null,
  name?: string | null,
  sectionID?: string | null,
};

export type DeleteStudentSectionInput = {
  id: string,
};

export type CreateStudentEnrollmentInput = {
  id?: string | null,
  studentID: string,
  name: string,
  sectionID: string,
  status: string,
};

export type ModelStudentEnrollmentConditionInput = {
  studentID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  sectionID?: ModelIDInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelStudentEnrollmentConditionInput | null > | null,
  or?: Array< ModelStudentEnrollmentConditionInput | null > | null,
  not?: ModelStudentEnrollmentConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateStudentEnrollmentInput = {
  id: string,
  studentID?: string | null,
  name?: string | null,
  sectionID?: string | null,
  status?: string | null,
};

export type DeleteStudentEnrollmentInput = {
  id: string,
};

export type ModelAuthorizationTokenFilterInput = {
  id?: ModelIDInput | null,
  token?: ModelStringInput | null,
  group?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAuthorizationTokenFilterInput | null > | null,
  or?: Array< ModelAuthorizationTokenFilterInput | null > | null,
  not?: ModelAuthorizationTokenFilterInput | null,
};

export type ModelAuthorizationTokenConnection = {
  __typename: "ModelAuthorizationTokenConnection",
  items:  Array<AuthorizationToken | null >,
  nextToken?: string | null,
};

export type ModelFacultyFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelFacultyFilterInput | null > | null,
  or?: Array< ModelFacultyFilterInput | null > | null,
  not?: ModelFacultyFilterInput | null,
};

export type ModelFacultyConnection = {
  __typename: "ModelFacultyConnection",
  items:  Array<Faculty | null >,
  nextToken?: string | null,
};

export type ModelDepartmentFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  facultyID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelDepartmentFilterInput | null > | null,
  or?: Array< ModelDepartmentFilterInput | null > | null,
  not?: ModelDepartmentFilterInput | null,
};

export type ModelSubjectFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  credit?: ModelIntInput | null,
  departmentID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSubjectFilterInput | null > | null,
  or?: Array< ModelSubjectFilterInput | null > | null,
  not?: ModelSubjectFilterInput | null,
};

export type ModelSectionFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  capacity?: ModelIntInput | null,
  teacher?: ModelStringInput | null,
  subjectID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSectionFilterInput | null > | null,
  or?: Array< ModelSectionFilterInput | null > | null,
  not?: ModelSectionFilterInput | null,
};

export type ModelSectionEligibleDepartmentFilterInput = {
  id?: ModelIDInput | null,
  sectionID?: ModelIDInput | null,
  departmentID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSectionEligibleDepartmentFilterInput | null > | null,
  or?: Array< ModelSectionEligibleDepartmentFilterInput | null > | null,
  not?: ModelSectionEligibleDepartmentFilterInput | null,
};

export type ModelStudentSectionFilterInput = {
  id?: ModelIDInput | null,
  studentID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  sectionID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStudentSectionFilterInput | null > | null,
  or?: Array< ModelStudentSectionFilterInput | null > | null,
  not?: ModelStudentSectionFilterInput | null,
};

export type ModelStudentEnrollmentFilterInput = {
  id?: ModelIDInput | null,
  studentID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  sectionID?: ModelIDInput | null,
  status?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStudentEnrollmentFilterInput | null > | null,
  or?: Array< ModelStudentEnrollmentFilterInput | null > | null,
  not?: ModelStudentEnrollmentFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionAuthorizationTokenFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  token?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAuthorizationTokenFilterInput | null > | null,
  or?: Array< ModelSubscriptionAuthorizationTokenFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionFacultyFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFacultyFilterInput | null > | null,
  or?: Array< ModelSubscriptionFacultyFilterInput | null > | null,
};

export type ModelSubscriptionDepartmentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  facultyID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionDepartmentFilterInput | null > | null,
  or?: Array< ModelSubscriptionDepartmentFilterInput | null > | null,
};

export type ModelSubscriptionSubjectFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  credit?: ModelSubscriptionIntInput | null,
  departmentID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSubjectFilterInput | null > | null,
  or?: Array< ModelSubscriptionSubjectFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionSectionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  capacity?: ModelSubscriptionIntInput | null,
  teacher?: ModelSubscriptionStringInput | null,
  subjectID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSectionFilterInput | null > | null,
  or?: Array< ModelSubscriptionSectionFilterInput | null > | null,
};

export type ModelSubscriptionSectionEligibleDepartmentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  sectionID?: ModelSubscriptionIDInput | null,
  departmentID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSectionEligibleDepartmentFilterInput | null > | null,
  or?: Array< ModelSubscriptionSectionEligibleDepartmentFilterInput | null > | null,
};

export type ModelSubscriptionStudentSectionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  studentID?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  sectionID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStudentSectionFilterInput | null > | null,
  or?: Array< ModelSubscriptionStudentSectionFilterInput | null > | null,
};

export type ModelSubscriptionStudentEnrollmentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  studentID?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  sectionID?: ModelSubscriptionIDInput | null,
  status?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStudentEnrollmentFilterInput | null > | null,
  or?: Array< ModelSubscriptionStudentEnrollmentFilterInput | null > | null,
};

export type CreateAuthorizationTokenMutationVariables = {
  input: CreateAuthorizationTokenInput,
  condition?: ModelAuthorizationTokenConditionInput | null,
};

export type CreateAuthorizationTokenMutation = {
  createAuthorizationToken?:  {
    __typename: "AuthorizationToken",
    id: string,
    token: string,
    group: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAuthorizationTokenMutationVariables = {
  input: UpdateAuthorizationTokenInput,
  condition?: ModelAuthorizationTokenConditionInput | null,
};

export type UpdateAuthorizationTokenMutation = {
  updateAuthorizationToken?:  {
    __typename: "AuthorizationToken",
    id: string,
    token: string,
    group: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAuthorizationTokenMutationVariables = {
  input: DeleteAuthorizationTokenInput,
  condition?: ModelAuthorizationTokenConditionInput | null,
};

export type DeleteAuthorizationTokenMutation = {
  deleteAuthorizationToken?:  {
    __typename: "AuthorizationToken",
    id: string,
    token: string,
    group: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateFacultyMutationVariables = {
  input: CreateFacultyInput,
  condition?: ModelFacultyConditionInput | null,
};

export type CreateFacultyMutation = {
  createFaculty?:  {
    __typename: "Faculty",
    id: string,
    name: string,
    departments?:  {
      __typename: "ModelDepartmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFacultyMutationVariables = {
  input: UpdateFacultyInput,
  condition?: ModelFacultyConditionInput | null,
};

export type UpdateFacultyMutation = {
  updateFaculty?:  {
    __typename: "Faculty",
    id: string,
    name: string,
    departments?:  {
      __typename: "ModelDepartmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFacultyMutationVariables = {
  input: DeleteFacultyInput,
  condition?: ModelFacultyConditionInput | null,
};

export type DeleteFacultyMutation = {
  deleteFaculty?:  {
    __typename: "Faculty",
    id: string,
    name: string,
    departments?:  {
      __typename: "ModelDepartmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateDepartmentMutationVariables = {
  input: CreateDepartmentInput,
  condition?: ModelDepartmentConditionInput | null,
};

export type CreateDepartmentMutation = {
  createDepartment?:  {
    __typename: "Department",
    id: string,
    name: string,
    facultyID: string,
    faculty?:  {
      __typename: "Faculty",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    subjects?:  {
      __typename: "ModelSubjectConnection",
      nextToken?: string | null,
    } | null,
    eligibleSubjects?:  {
      __typename: "ModelSectionEligibleDepartmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateDepartmentMutationVariables = {
  input: UpdateDepartmentInput,
  condition?: ModelDepartmentConditionInput | null,
};

export type UpdateDepartmentMutation = {
  updateDepartment?:  {
    __typename: "Department",
    id: string,
    name: string,
    facultyID: string,
    faculty?:  {
      __typename: "Faculty",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    subjects?:  {
      __typename: "ModelSubjectConnection",
      nextToken?: string | null,
    } | null,
    eligibleSubjects?:  {
      __typename: "ModelSectionEligibleDepartmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteDepartmentMutationVariables = {
  input: DeleteDepartmentInput,
  condition?: ModelDepartmentConditionInput | null,
};

export type DeleteDepartmentMutation = {
  deleteDepartment?:  {
    __typename: "Department",
    id: string,
    name: string,
    facultyID: string,
    faculty?:  {
      __typename: "Faculty",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    subjects?:  {
      __typename: "ModelSubjectConnection",
      nextToken?: string | null,
    } | null,
    eligibleSubjects?:  {
      __typename: "ModelSectionEligibleDepartmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSubjectMutationVariables = {
  input: CreateSubjectInput,
  condition?: ModelSubjectConditionInput | null,
};

export type CreateSubjectMutation = {
  createSubject?:  {
    __typename: "Subject",
    id: string,
    name: string,
    credit: number,
    departmentID: string,
    department?:  {
      __typename: "Department",
      id: string,
      name: string,
      facultyID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    sections?:  {
      __typename: "ModelSectionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSubjectMutationVariables = {
  input: UpdateSubjectInput,
  condition?: ModelSubjectConditionInput | null,
};

export type UpdateSubjectMutation = {
  updateSubject?:  {
    __typename: "Subject",
    id: string,
    name: string,
    credit: number,
    departmentID: string,
    department?:  {
      __typename: "Department",
      id: string,
      name: string,
      facultyID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    sections?:  {
      __typename: "ModelSectionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSubjectMutationVariables = {
  input: DeleteSubjectInput,
  condition?: ModelSubjectConditionInput | null,
};

export type DeleteSubjectMutation = {
  deleteSubject?:  {
    __typename: "Subject",
    id: string,
    name: string,
    credit: number,
    departmentID: string,
    department?:  {
      __typename: "Department",
      id: string,
      name: string,
      facultyID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    sections?:  {
      __typename: "ModelSectionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSectionMutationVariables = {
  input: CreateSectionInput,
  condition?: ModelSectionConditionInput | null,
};

export type CreateSectionMutation = {
  createSection?:  {
    __typename: "Section",
    id: string,
    name: string,
    capacity: number,
    teacher: string,
    subjectID: string,
    subject?:  {
      __typename: "Subject",
      id: string,
      name: string,
      credit: number,
      departmentID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    eligibleDepartments?:  {
      __typename: "ModelSectionEligibleDepartmentConnection",
      nextToken?: string | null,
    } | null,
    students?:  {
      __typename: "ModelStudentSectionConnection",
      nextToken?: string | null,
    } | null,
    studentEnrollment?:  {
      __typename: "ModelStudentEnrollmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSectionMutationVariables = {
  input: UpdateSectionInput,
  condition?: ModelSectionConditionInput | null,
};

export type UpdateSectionMutation = {
  updateSection?:  {
    __typename: "Section",
    id: string,
    name: string,
    capacity: number,
    teacher: string,
    subjectID: string,
    subject?:  {
      __typename: "Subject",
      id: string,
      name: string,
      credit: number,
      departmentID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    eligibleDepartments?:  {
      __typename: "ModelSectionEligibleDepartmentConnection",
      nextToken?: string | null,
    } | null,
    students?:  {
      __typename: "ModelStudentSectionConnection",
      nextToken?: string | null,
    } | null,
    studentEnrollment?:  {
      __typename: "ModelStudentEnrollmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSectionMutationVariables = {
  input: DeleteSectionInput,
  condition?: ModelSectionConditionInput | null,
};

export type DeleteSectionMutation = {
  deleteSection?:  {
    __typename: "Section",
    id: string,
    name: string,
    capacity: number,
    teacher: string,
    subjectID: string,
    subject?:  {
      __typename: "Subject",
      id: string,
      name: string,
      credit: number,
      departmentID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    eligibleDepartments?:  {
      __typename: "ModelSectionEligibleDepartmentConnection",
      nextToken?: string | null,
    } | null,
    students?:  {
      __typename: "ModelStudentSectionConnection",
      nextToken?: string | null,
    } | null,
    studentEnrollment?:  {
      __typename: "ModelStudentEnrollmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSectionEligibleDepartmentMutationVariables = {
  input: CreateSectionEligibleDepartmentInput,
  condition?: ModelSectionEligibleDepartmentConditionInput | null,
};

export type CreateSectionEligibleDepartmentMutation = {
  createSectionEligibleDepartment?:  {
    __typename: "SectionEligibleDepartment",
    id: string,
    sectionID: string,
    section?:  {
      __typename: "Section",
      id: string,
      name: string,
      capacity: number,
      teacher: string,
      subjectID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    departmentID: string,
    department?:  {
      __typename: "Department",
      id: string,
      name: string,
      facultyID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSectionEligibleDepartmentMutationVariables = {
  input: UpdateSectionEligibleDepartmentInput,
  condition?: ModelSectionEligibleDepartmentConditionInput | null,
};

export type UpdateSectionEligibleDepartmentMutation = {
  updateSectionEligibleDepartment?:  {
    __typename: "SectionEligibleDepartment",
    id: string,
    sectionID: string,
    section?:  {
      __typename: "Section",
      id: string,
      name: string,
      capacity: number,
      teacher: string,
      subjectID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    departmentID: string,
    department?:  {
      __typename: "Department",
      id: string,
      name: string,
      facultyID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSectionEligibleDepartmentMutationVariables = {
  input: DeleteSectionEligibleDepartmentInput,
  condition?: ModelSectionEligibleDepartmentConditionInput | null,
};

export type DeleteSectionEligibleDepartmentMutation = {
  deleteSectionEligibleDepartment?:  {
    __typename: "SectionEligibleDepartment",
    id: string,
    sectionID: string,
    section?:  {
      __typename: "Section",
      id: string,
      name: string,
      capacity: number,
      teacher: string,
      subjectID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    departmentID: string,
    department?:  {
      __typename: "Department",
      id: string,
      name: string,
      facultyID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateStudentSectionMutationVariables = {
  input: CreateStudentSectionInput,
  condition?: ModelStudentSectionConditionInput | null,
};

export type CreateStudentSectionMutation = {
  createStudentSection?:  {
    __typename: "StudentSection",
    id: string,
    studentID: string,
    name: string,
    sectionID: string,
    section?:  {
      __typename: "Section",
      id: string,
      name: string,
      capacity: number,
      teacher: string,
      subjectID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateStudentSectionMutationVariables = {
  input: UpdateStudentSectionInput,
  condition?: ModelStudentSectionConditionInput | null,
};

export type UpdateStudentSectionMutation = {
  updateStudentSection?:  {
    __typename: "StudentSection",
    id: string,
    studentID: string,
    name: string,
    sectionID: string,
    section?:  {
      __typename: "Section",
      id: string,
      name: string,
      capacity: number,
      teacher: string,
      subjectID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteStudentSectionMutationVariables = {
  input: DeleteStudentSectionInput,
  condition?: ModelStudentSectionConditionInput | null,
};

export type DeleteStudentSectionMutation = {
  deleteStudentSection?:  {
    __typename: "StudentSection",
    id: string,
    studentID: string,
    name: string,
    sectionID: string,
    section?:  {
      __typename: "Section",
      id: string,
      name: string,
      capacity: number,
      teacher: string,
      subjectID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateStudentEnrollmentMutationVariables = {
  input: CreateStudentEnrollmentInput,
  condition?: ModelStudentEnrollmentConditionInput | null,
};

export type CreateStudentEnrollmentMutation = {
  createStudentEnrollment?:  {
    __typename: "StudentEnrollment",
    id: string,
    studentID: string,
    name: string,
    sectionID: string,
    section?:  {
      __typename: "Section",
      id: string,
      name: string,
      capacity: number,
      teacher: string,
      subjectID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    status: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateStudentEnrollmentMutationVariables = {
  input: UpdateStudentEnrollmentInput,
  condition?: ModelStudentEnrollmentConditionInput | null,
};

export type UpdateStudentEnrollmentMutation = {
  updateStudentEnrollment?:  {
    __typename: "StudentEnrollment",
    id: string,
    studentID: string,
    name: string,
    sectionID: string,
    section?:  {
      __typename: "Section",
      id: string,
      name: string,
      capacity: number,
      teacher: string,
      subjectID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    status: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteStudentEnrollmentMutationVariables = {
  input: DeleteStudentEnrollmentInput,
  condition?: ModelStudentEnrollmentConditionInput | null,
};

export type DeleteStudentEnrollmentMutation = {
  deleteStudentEnrollment?:  {
    __typename: "StudentEnrollment",
    id: string,
    studentID: string,
    name: string,
    sectionID: string,
    section?:  {
      __typename: "Section",
      id: string,
      name: string,
      capacity: number,
      teacher: string,
      subjectID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    status: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetAuthorizationTokenQueryVariables = {
  id: string,
};

export type GetAuthorizationTokenQuery = {
  getAuthorizationToken?:  {
    __typename: "AuthorizationToken",
    id: string,
    token: string,
    group: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAuthorizationTokensQueryVariables = {
  filter?: ModelAuthorizationTokenFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAuthorizationTokensQuery = {
  listAuthorizationTokens?:  {
    __typename: "ModelAuthorizationTokenConnection",
    items:  Array< {
      __typename: "AuthorizationToken",
      id: string,
      token: string,
      group: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFacultyQueryVariables = {
  id: string,
};

export type GetFacultyQuery = {
  getFaculty?:  {
    __typename: "Faculty",
    id: string,
    name: string,
    departments?:  {
      __typename: "ModelDepartmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFacultiesQueryVariables = {
  filter?: ModelFacultyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFacultiesQuery = {
  listFaculties?:  {
    __typename: "ModelFacultyConnection",
    items:  Array< {
      __typename: "Faculty",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetDepartmentQueryVariables = {
  id: string,
};

export type GetDepartmentQuery = {
  getDepartment?:  {
    __typename: "Department",
    id: string,
    name: string,
    facultyID: string,
    faculty?:  {
      __typename: "Faculty",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    subjects?:  {
      __typename: "ModelSubjectConnection",
      nextToken?: string | null,
    } | null,
    eligibleSubjects?:  {
      __typename: "ModelSectionEligibleDepartmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListDepartmentsQueryVariables = {
  filter?: ModelDepartmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDepartmentsQuery = {
  listDepartments?:  {
    __typename: "ModelDepartmentConnection",
    items:  Array< {
      __typename: "Department",
      id: string,
      name: string,
      facultyID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSubjectQueryVariables = {
  id: string,
};

export type GetSubjectQuery = {
  getSubject?:  {
    __typename: "Subject",
    id: string,
    name: string,
    credit: number,
    departmentID: string,
    department?:  {
      __typename: "Department",
      id: string,
      name: string,
      facultyID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    sections?:  {
      __typename: "ModelSectionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSubjectsQueryVariables = {
  filter?: ModelSubjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSubjectsQuery = {
  listSubjects?:  {
    __typename: "ModelSubjectConnection",
    items:  Array< {
      __typename: "Subject",
      id: string,
      name: string,
      credit: number,
      departmentID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSectionQueryVariables = {
  id: string,
};

export type GetSectionQuery = {
  getSection?:  {
    __typename: "Section",
    id: string,
    name: string,
    capacity: number,
    teacher: string,
    subjectID: string,
    subject?:  {
      __typename: "Subject",
      id: string,
      name: string,
      credit: number,
      departmentID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    eligibleDepartments?:  {
      __typename: "ModelSectionEligibleDepartmentConnection",
      nextToken?: string | null,
    } | null,
    students?:  {
      __typename: "ModelStudentSectionConnection",
      nextToken?: string | null,
    } | null,
    studentEnrollment?:  {
      __typename: "ModelStudentEnrollmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSectionsQueryVariables = {
  filter?: ModelSectionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSectionsQuery = {
  listSections?:  {
    __typename: "ModelSectionConnection",
    items:  Array< {
      __typename: "Section",
      id: string,
      name: string,
      capacity: number,
      teacher: string,
      subjectID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSectionEligibleDepartmentQueryVariables = {
  id: string,
};

export type GetSectionEligibleDepartmentQuery = {
  getSectionEligibleDepartment?:  {
    __typename: "SectionEligibleDepartment",
    id: string,
    sectionID: string,
    section?:  {
      __typename: "Section",
      id: string,
      name: string,
      capacity: number,
      teacher: string,
      subjectID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    departmentID: string,
    department?:  {
      __typename: "Department",
      id: string,
      name: string,
      facultyID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSectionEligibleDepartmentsQueryVariables = {
  filter?: ModelSectionEligibleDepartmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSectionEligibleDepartmentsQuery = {
  listSectionEligibleDepartments?:  {
    __typename: "ModelSectionEligibleDepartmentConnection",
    items:  Array< {
      __typename: "SectionEligibleDepartment",
      id: string,
      sectionID: string,
      departmentID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStudentSectionQueryVariables = {
  id: string,
};

export type GetStudentSectionQuery = {
  getStudentSection?:  {
    __typename: "StudentSection",
    id: string,
    studentID: string,
    name: string,
    sectionID: string,
    section?:  {
      __typename: "Section",
      id: string,
      name: string,
      capacity: number,
      teacher: string,
      subjectID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListStudentSectionsQueryVariables = {
  filter?: ModelStudentSectionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStudentSectionsQuery = {
  listStudentSections?:  {
    __typename: "ModelStudentSectionConnection",
    items:  Array< {
      __typename: "StudentSection",
      id: string,
      studentID: string,
      name: string,
      sectionID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStudentEnrollmentQueryVariables = {
  id: string,
};

export type GetStudentEnrollmentQuery = {
  getStudentEnrollment?:  {
    __typename: "StudentEnrollment",
    id: string,
    studentID: string,
    name: string,
    sectionID: string,
    section?:  {
      __typename: "Section",
      id: string,
      name: string,
      capacity: number,
      teacher: string,
      subjectID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    status: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListStudentEnrollmentsQueryVariables = {
  filter?: ModelStudentEnrollmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStudentEnrollmentsQuery = {
  listStudentEnrollments?:  {
    __typename: "ModelStudentEnrollmentConnection",
    items:  Array< {
      __typename: "StudentEnrollment",
      id: string,
      studentID: string,
      name: string,
      sectionID: string,
      status: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type DepartmentsByFacultyIDQueryVariables = {
  facultyID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelDepartmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type DepartmentsByFacultyIDQuery = {
  departmentsByFacultyID?:  {
    __typename: "ModelDepartmentConnection",
    items:  Array< {
      __typename: "Department",
      id: string,
      name: string,
      facultyID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SubjectsByDepartmentIDQueryVariables = {
  departmentID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSubjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SubjectsByDepartmentIDQuery = {
  subjectsByDepartmentID?:  {
    __typename: "ModelSubjectConnection",
    items:  Array< {
      __typename: "Subject",
      id: string,
      name: string,
      credit: number,
      departmentID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SectionsBySubjectIDQueryVariables = {
  subjectID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSectionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SectionsBySubjectIDQuery = {
  sectionsBySubjectID?:  {
    __typename: "ModelSectionConnection",
    items:  Array< {
      __typename: "Section",
      id: string,
      name: string,
      capacity: number,
      teacher: string,
      subjectID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SectionEligibleDepartmentsBySectionIDQueryVariables = {
  sectionID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSectionEligibleDepartmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SectionEligibleDepartmentsBySectionIDQuery = {
  sectionEligibleDepartmentsBySectionID?:  {
    __typename: "ModelSectionEligibleDepartmentConnection",
    items:  Array< {
      __typename: "SectionEligibleDepartment",
      id: string,
      sectionID: string,
      departmentID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SectionEligibleDepartmentsByDepartmentIDQueryVariables = {
  departmentID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSectionEligibleDepartmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SectionEligibleDepartmentsByDepartmentIDQuery = {
  sectionEligibleDepartmentsByDepartmentID?:  {
    __typename: "ModelSectionEligibleDepartmentConnection",
    items:  Array< {
      __typename: "SectionEligibleDepartment",
      id: string,
      sectionID: string,
      departmentID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type StudentSectionsBySectionIDQueryVariables = {
  sectionID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelStudentSectionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type StudentSectionsBySectionIDQuery = {
  studentSectionsBySectionID?:  {
    __typename: "ModelStudentSectionConnection",
    items:  Array< {
      __typename: "StudentSection",
      id: string,
      studentID: string,
      name: string,
      sectionID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type StudentEnrollmentsBySectionIDQueryVariables = {
  sectionID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelStudentEnrollmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type StudentEnrollmentsBySectionIDQuery = {
  studentEnrollmentsBySectionID?:  {
    __typename: "ModelStudentEnrollmentConnection",
    items:  Array< {
      __typename: "StudentEnrollment",
      id: string,
      studentID: string,
      name: string,
      sectionID: string,
      status: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateAuthorizationTokenSubscriptionVariables = {
  filter?: ModelSubscriptionAuthorizationTokenFilterInput | null,
};

export type OnCreateAuthorizationTokenSubscription = {
  onCreateAuthorizationToken?:  {
    __typename: "AuthorizationToken",
    id: string,
    token: string,
    group: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAuthorizationTokenSubscriptionVariables = {
  filter?: ModelSubscriptionAuthorizationTokenFilterInput | null,
};

export type OnUpdateAuthorizationTokenSubscription = {
  onUpdateAuthorizationToken?:  {
    __typename: "AuthorizationToken",
    id: string,
    token: string,
    group: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAuthorizationTokenSubscriptionVariables = {
  filter?: ModelSubscriptionAuthorizationTokenFilterInput | null,
};

export type OnDeleteAuthorizationTokenSubscription = {
  onDeleteAuthorizationToken?:  {
    __typename: "AuthorizationToken",
    id: string,
    token: string,
    group: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFacultySubscriptionVariables = {
  filter?: ModelSubscriptionFacultyFilterInput | null,
};

export type OnCreateFacultySubscription = {
  onCreateFaculty?:  {
    __typename: "Faculty",
    id: string,
    name: string,
    departments?:  {
      __typename: "ModelDepartmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFacultySubscriptionVariables = {
  filter?: ModelSubscriptionFacultyFilterInput | null,
};

export type OnUpdateFacultySubscription = {
  onUpdateFaculty?:  {
    __typename: "Faculty",
    id: string,
    name: string,
    departments?:  {
      __typename: "ModelDepartmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFacultySubscriptionVariables = {
  filter?: ModelSubscriptionFacultyFilterInput | null,
};

export type OnDeleteFacultySubscription = {
  onDeleteFaculty?:  {
    __typename: "Faculty",
    id: string,
    name: string,
    departments?:  {
      __typename: "ModelDepartmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateDepartmentSubscriptionVariables = {
  filter?: ModelSubscriptionDepartmentFilterInput | null,
};

export type OnCreateDepartmentSubscription = {
  onCreateDepartment?:  {
    __typename: "Department",
    id: string,
    name: string,
    facultyID: string,
    faculty?:  {
      __typename: "Faculty",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    subjects?:  {
      __typename: "ModelSubjectConnection",
      nextToken?: string | null,
    } | null,
    eligibleSubjects?:  {
      __typename: "ModelSectionEligibleDepartmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateDepartmentSubscriptionVariables = {
  filter?: ModelSubscriptionDepartmentFilterInput | null,
};

export type OnUpdateDepartmentSubscription = {
  onUpdateDepartment?:  {
    __typename: "Department",
    id: string,
    name: string,
    facultyID: string,
    faculty?:  {
      __typename: "Faculty",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    subjects?:  {
      __typename: "ModelSubjectConnection",
      nextToken?: string | null,
    } | null,
    eligibleSubjects?:  {
      __typename: "ModelSectionEligibleDepartmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteDepartmentSubscriptionVariables = {
  filter?: ModelSubscriptionDepartmentFilterInput | null,
};

export type OnDeleteDepartmentSubscription = {
  onDeleteDepartment?:  {
    __typename: "Department",
    id: string,
    name: string,
    facultyID: string,
    faculty?:  {
      __typename: "Faculty",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    subjects?:  {
      __typename: "ModelSubjectConnection",
      nextToken?: string | null,
    } | null,
    eligibleSubjects?:  {
      __typename: "ModelSectionEligibleDepartmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSubjectSubscriptionVariables = {
  filter?: ModelSubscriptionSubjectFilterInput | null,
};

export type OnCreateSubjectSubscription = {
  onCreateSubject?:  {
    __typename: "Subject",
    id: string,
    name: string,
    credit: number,
    departmentID: string,
    department?:  {
      __typename: "Department",
      id: string,
      name: string,
      facultyID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    sections?:  {
      __typename: "ModelSectionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSubjectSubscriptionVariables = {
  filter?: ModelSubscriptionSubjectFilterInput | null,
};

export type OnUpdateSubjectSubscription = {
  onUpdateSubject?:  {
    __typename: "Subject",
    id: string,
    name: string,
    credit: number,
    departmentID: string,
    department?:  {
      __typename: "Department",
      id: string,
      name: string,
      facultyID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    sections?:  {
      __typename: "ModelSectionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSubjectSubscriptionVariables = {
  filter?: ModelSubscriptionSubjectFilterInput | null,
};

export type OnDeleteSubjectSubscription = {
  onDeleteSubject?:  {
    __typename: "Subject",
    id: string,
    name: string,
    credit: number,
    departmentID: string,
    department?:  {
      __typename: "Department",
      id: string,
      name: string,
      facultyID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    sections?:  {
      __typename: "ModelSectionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSectionSubscriptionVariables = {
  filter?: ModelSubscriptionSectionFilterInput | null,
};

export type OnCreateSectionSubscription = {
  onCreateSection?:  {
    __typename: "Section",
    id: string,
    name: string,
    capacity: number,
    teacher: string,
    subjectID: string,
    subject?:  {
      __typename: "Subject",
      id: string,
      name: string,
      credit: number,
      departmentID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    eligibleDepartments?:  {
      __typename: "ModelSectionEligibleDepartmentConnection",
      nextToken?: string | null,
    } | null,
    students?:  {
      __typename: "ModelStudentSectionConnection",
      nextToken?: string | null,
    } | null,
    studentEnrollment?:  {
      __typename: "ModelStudentEnrollmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSectionSubscriptionVariables = {
  filter?: ModelSubscriptionSectionFilterInput | null,
};

export type OnUpdateSectionSubscription = {
  onUpdateSection?:  {
    __typename: "Section",
    id: string,
    name: string,
    capacity: number,
    teacher: string,
    subjectID: string,
    subject?:  {
      __typename: "Subject",
      id: string,
      name: string,
      credit: number,
      departmentID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    eligibleDepartments?:  {
      __typename: "ModelSectionEligibleDepartmentConnection",
      nextToken?: string | null,
    } | null,
    students?:  {
      __typename: "ModelStudentSectionConnection",
      nextToken?: string | null,
    } | null,
    studentEnrollment?:  {
      __typename: "ModelStudentEnrollmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSectionSubscriptionVariables = {
  filter?: ModelSubscriptionSectionFilterInput | null,
};

export type OnDeleteSectionSubscription = {
  onDeleteSection?:  {
    __typename: "Section",
    id: string,
    name: string,
    capacity: number,
    teacher: string,
    subjectID: string,
    subject?:  {
      __typename: "Subject",
      id: string,
      name: string,
      credit: number,
      departmentID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    eligibleDepartments?:  {
      __typename: "ModelSectionEligibleDepartmentConnection",
      nextToken?: string | null,
    } | null,
    students?:  {
      __typename: "ModelStudentSectionConnection",
      nextToken?: string | null,
    } | null,
    studentEnrollment?:  {
      __typename: "ModelStudentEnrollmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSectionEligibleDepartmentSubscriptionVariables = {
  filter?: ModelSubscriptionSectionEligibleDepartmentFilterInput | null,
};

export type OnCreateSectionEligibleDepartmentSubscription = {
  onCreateSectionEligibleDepartment?:  {
    __typename: "SectionEligibleDepartment",
    id: string,
    sectionID: string,
    section?:  {
      __typename: "Section",
      id: string,
      name: string,
      capacity: number,
      teacher: string,
      subjectID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    departmentID: string,
    department?:  {
      __typename: "Department",
      id: string,
      name: string,
      facultyID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSectionEligibleDepartmentSubscriptionVariables = {
  filter?: ModelSubscriptionSectionEligibleDepartmentFilterInput | null,
};

export type OnUpdateSectionEligibleDepartmentSubscription = {
  onUpdateSectionEligibleDepartment?:  {
    __typename: "SectionEligibleDepartment",
    id: string,
    sectionID: string,
    section?:  {
      __typename: "Section",
      id: string,
      name: string,
      capacity: number,
      teacher: string,
      subjectID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    departmentID: string,
    department?:  {
      __typename: "Department",
      id: string,
      name: string,
      facultyID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSectionEligibleDepartmentSubscriptionVariables = {
  filter?: ModelSubscriptionSectionEligibleDepartmentFilterInput | null,
};

export type OnDeleteSectionEligibleDepartmentSubscription = {
  onDeleteSectionEligibleDepartment?:  {
    __typename: "SectionEligibleDepartment",
    id: string,
    sectionID: string,
    section?:  {
      __typename: "Section",
      id: string,
      name: string,
      capacity: number,
      teacher: string,
      subjectID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    departmentID: string,
    department?:  {
      __typename: "Department",
      id: string,
      name: string,
      facultyID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateStudentSectionSubscriptionVariables = {
  filter?: ModelSubscriptionStudentSectionFilterInput | null,
};

export type OnCreateStudentSectionSubscription = {
  onCreateStudentSection?:  {
    __typename: "StudentSection",
    id: string,
    studentID: string,
    name: string,
    sectionID: string,
    section?:  {
      __typename: "Section",
      id: string,
      name: string,
      capacity: number,
      teacher: string,
      subjectID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateStudentSectionSubscriptionVariables = {
  filter?: ModelSubscriptionStudentSectionFilterInput | null,
};

export type OnUpdateStudentSectionSubscription = {
  onUpdateStudentSection?:  {
    __typename: "StudentSection",
    id: string,
    studentID: string,
    name: string,
    sectionID: string,
    section?:  {
      __typename: "Section",
      id: string,
      name: string,
      capacity: number,
      teacher: string,
      subjectID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteStudentSectionSubscriptionVariables = {
  filter?: ModelSubscriptionStudentSectionFilterInput | null,
};

export type OnDeleteStudentSectionSubscription = {
  onDeleteStudentSection?:  {
    __typename: "StudentSection",
    id: string,
    studentID: string,
    name: string,
    sectionID: string,
    section?:  {
      __typename: "Section",
      id: string,
      name: string,
      capacity: number,
      teacher: string,
      subjectID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateStudentEnrollmentSubscriptionVariables = {
  filter?: ModelSubscriptionStudentEnrollmentFilterInput | null,
};

export type OnCreateStudentEnrollmentSubscription = {
  onCreateStudentEnrollment?:  {
    __typename: "StudentEnrollment",
    id: string,
    studentID: string,
    name: string,
    sectionID: string,
    section?:  {
      __typename: "Section",
      id: string,
      name: string,
      capacity: number,
      teacher: string,
      subjectID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    status: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateStudentEnrollmentSubscriptionVariables = {
  filter?: ModelSubscriptionStudentEnrollmentFilterInput | null,
};

export type OnUpdateStudentEnrollmentSubscription = {
  onUpdateStudentEnrollment?:  {
    __typename: "StudentEnrollment",
    id: string,
    studentID: string,
    name: string,
    sectionID: string,
    section?:  {
      __typename: "Section",
      id: string,
      name: string,
      capacity: number,
      teacher: string,
      subjectID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    status: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteStudentEnrollmentSubscriptionVariables = {
  filter?: ModelSubscriptionStudentEnrollmentFilterInput | null,
};

export type OnDeleteStudentEnrollmentSubscription = {
  onDeleteStudentEnrollment?:  {
    __typename: "StudentEnrollment",
    id: string,
    studentID: string,
    name: string,
    sectionID: string,
    section?:  {
      __typename: "Section",
      id: string,
      name: string,
      capacity: number,
      teacher: string,
      subjectID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    status: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
