export interface FacultyType {
    id: string;
    name: string;
}

export interface DepartmentType {
    id: string;
    name: string;
    facultyID: string;
    faculty?: FacultyType;
}