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
    listStudentSections?: {
        __typename: "ModelStudentSectionConnection",
        items: Array<{
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
                    credit: number,
                } | null,
            }
        } | null>,
        nextToken?: string | null,
    } | null,
};

export type ListMyEnrollmentsQuery = {
    listStudentEnrollments?: {
        __typename: "ModelStudentEnrollmentConnection",
        items: Array<{
            __typename: "StudentEnrollment",
            id: string,
            studentID: string,
            sectionID: string,
            status: string,
            section?: {
                id: string,
                name: string,
                capacity: number,
                teacher: string,
                subjectID: string,
                subject?: {
                    id: string,
                    name: string,
                    credit: number,
                    departmentID: string,
                } | null,
            }
        } | null>,
        nextToken?: string | null,
    } | null,
};

export type ListSectionStudents = {
    listStudentSections?: {
        __typename: "ModelStudentSectionConnection",
        items: Array<{
            __typename: "StudentSection",
            id: string,
            studentID: string,
            name: string,
        }>
    }
}

export type ListSectionEnrollment = {
    listStudentEnrollments?: {
        __typename: "ModelStudentEnrollmentConnection",
        items: Array<{
            __typename: "StudentEnrollment",
            id: string,
            studentID: string,
            name: string,
            status: string,
            createdAt: string,
        }>
    }
}