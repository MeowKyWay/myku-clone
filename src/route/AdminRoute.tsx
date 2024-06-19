import { RouteObject } from "react-router-dom";
import ManageFaculty from "../components/main/admin/ManageFaculty";
import ManageDepartment from "../components/main/admin/ManageDepartment";
import ManageTeacher from "../components/main/admin/ManageTeacher";
import ManageStudent from "../components/main/admin/ManageStudent";

export enum AdminRoutePath {
    FACULTY = '/std/admin/faculties',
    DEPARTMENT = '/std/admin/departments',
    TEACHER = '/std/admin/teachers',
    STUDENT = '/std/admin/students'
}

function AdminRoute() {
    return (
        [
            {
                index: true,
                element: <ManageFaculty />
            },
            {
                path: AdminRoutePath.FACULTY,
                element: <ManageFaculty />
            },
            {
                path: AdminRoutePath.DEPARTMENT,
                element: <ManageDepartment />
            },
            {
                path: AdminRoutePath.TEACHER,
                element: <ManageTeacher />
            },
            {
                path: AdminRoutePath.STUDENT,
                element: <ManageStudent />
            }
        ] as RouteObject[]
    )
}

export default AdminRoute;