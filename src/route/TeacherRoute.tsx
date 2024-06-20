import { RouteObject } from "react-router-dom";
import { TeacherRoutePath } from "./RoutePath";
import Subject from "../components/main/teacher/Subject";
import SubjectAnnouncement from "../components/main/teacher/SubjectAnnouncement";

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
                path: TeacherRoutePath.SUBJECT_ANNOUNCEMENT,
                element: <SubjectAnnouncement />
            }
        ] as RouteObject[]
    )
}

export default TeacherRoute;