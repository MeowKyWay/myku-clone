import { RouteObject } from "react-router-dom";
import ManageFaculty from "../components/main/admin/ManageFaculty";
import ManageDepartment from "../components/main/admin/ManageDepartment";
import ManageTeacher from "../components/main/admin/ManageTeacher";
import ManageStudent from "../components/main/admin/ManageStudent";

function AdminRoute() {
    return (
        [
            {
                index: true,
                element: <ManageFaculty />
            },
            {
                path: '/std/admin/faculty',
                element: <ManageFaculty />
            },
            {
                path: '/std/admin/department/:filter?',
                element: <ManageDepartment />
            },
            {
                path: '/std/admin/teacher',
                element: <ManageTeacher />
            },
            {
                path: '/std/admin/student',
                element: <ManageStudent />
            }
        ] as RouteObject[]
    )
}

export default AdminRoute;