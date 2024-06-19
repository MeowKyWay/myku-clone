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