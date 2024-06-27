export type ListSubjectsWithSectionsQuery = {
    listSubjects?: {
        __typename: "ModelSubjectConnection",
        items: Array<{
            __typename: "Subject",
            id: string,
            name: string,
            credit: number,
            departmentID: string,
            department?: {
                id: string,
                name: string,
                facultyID: string,
            } | null,
            sections?: {
                items: Array<{
                    __typename: "Section",
                    id: string,
                    name: string,
                    capacity: number,
                    teacher: string,
                    subjectID: string,
                    
                    eligibleDepartments?: {
                        items: Array<{
                            __typename: "SectionEligibleDepartment",
                            id: string,
                            sectionID: string,
                            departmentID: string,
                            department?: {
                                __typename: "Department",
                                id: string,
                                name: string,
                            } | null,
                        }>
                    }
                    createdAt: string,
                    updatedAt: string,
                }>
            }
            createdAt: string,
            updatedAt: string,
        } | null>,
    }
};

export type ListSectionsWithSubjectEligibleDepartmentsQuery = {
    listSections?: {
        __typename: "ModelSectionConnection",
        items: Array<{
            __typename: "Section",
            id: string,
            name: string,
            capacity: number,
            teacher: string,
            subjectID: string,
            eligibleDepartments?: {
                items: Array<{
                    __typename: "SectionEligibleDepartment",
                    id: string,
                    sectionID: string,
                    departmentID: string,

                    department?: {
                        __typename: "Department",
                        id: string,
                        name: string,
                    } | null,
                }>
            }
            createdAt: string,
            updatedAt: string,
        } | null>,
        nextToken?: string | null,
    } | null,
};

export type ListMySectionsQuery = {
    listStudentSections?:  {
      __typename: "ModelStudentSectionConnection",
      items:  Array< {
        id: string,
        studentID: string,
        section?: {
            id: string,
            name: string,
            capacity: number,
            teacher: string,
            subject?: {
                id: string,
                name: string,
            } | null,
        }
      } | null >,
      nextToken?: string | null,
    } | null,
  };