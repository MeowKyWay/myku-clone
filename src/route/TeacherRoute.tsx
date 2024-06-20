import { RouteObject } from "react-router-dom";
import { TeacherRoutePath } from "./RoutePath";
import Subject from "../components/main/teacher/Subject";

function TeacherRoute() {
    return (
        [
            {
                index: true,
                element: <Subject />
            },
            {
                path: TeacherRoutePath.SUBJECT,
                element: <Subject />
            },
            {
                path: TeacherRoutePath.SECTION
            }
        ] as RouteObject[]
    )
}

export default TeacherRoute;