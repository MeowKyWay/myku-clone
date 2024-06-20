import { RouteObject } from "react-router-dom";
import { TeacherRoutePath } from "./RoutePath";
import Subject from "../components/main/teacher/Subject";
import SubjectAnnouncement from "../components/main/teacher/SubjectAnnouncement";

function TeacherRoute() {
    return (
        [
            {
                index: true,
                element: <div>Teacher</div>
            },
            {
                path: TeacherRoutePath.MYSUBJECT,
                element: <Subject />
            },
            {
                path: TeacherRoutePath.MYSUBJECT_ANNOUNCEMENT,
                element: <SubjectAnnouncement />
            }
        ] as RouteObject[]
    )
}

export default TeacherRoute;