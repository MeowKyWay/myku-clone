export interface UserType {
    id: string;
    name: string;
    email: string;
    departmentID: string;
    userStatus: string;
    studentID?: string;
}

export interface FacultyType {
    id: string;
    name: string;
}

export interface DepartmentType {
    id: string;
    name: string;
    facultyID: string;
    faculty?: FacultyType | null;
}

export interface SubjectType {
    id: string;
    name: string;
    credit: number;

    departmentID: string;
    department?: DepartmentType | null;

    sections?: {
        items: SectionType[];
    } | null;
}

export interface SectionType {
    id: string;
    name: string;
    capacity: number;

    teacher: string;

    subjectID: string;
    subject?: SubjectType | null;

    eligibleDepartments?: {
        items: SectionEligibleDepartmentType[];
    } | null;
}

export interface SectionEligibleDepartmentType {
    id: string;

    sectionID: string;
    departmentID: string;

    department?: {
        id: string;
        name: string;
    } | null;
}

export interface StudentSectionType {
    id: string;
    studentID: string;
    sectionID: string;
    section?: SectionType | null;
}