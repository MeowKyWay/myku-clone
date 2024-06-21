import { RouteObject } from "react-router-dom";
import ManageFaculty from "../components/main/admin/ManageFaculty";
import ManageDepartment from "../components/main/admin/ManageDepartment";
import ManageTeacher from "../components/main/admin/ManageTeacher";
import ManageStudent from "../components/main/admin/ManageStudent";
import { AdminRoutePath } from "./RoutePath";
import ManageSubject from "../components/main/admin/ManageSubject";

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
                path: AdminRoutePath.DEPARTMENT + "/:filter",
                element: <ManageDepartment />
            },
            {
                path: AdminRoutePath.SUBJECT,
                element: <ManageSubject />
            },
            {
                path: AdminRoutePath.SUBJECT + "/:filter",
                element: <ManageSubject />
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