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
}

export interface SectionType {
    id: string;
    name: string;
    capacity: number;

    teacher: string;

    subjectID: string;
    subject?: SubjectType | null;
}