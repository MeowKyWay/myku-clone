import { RouteObject } from "react-router-dom";
import Enroll from "../components/main/student/Enroll";
import EnrollResult from "../components/main/student/EnrollResult";
import { StudentRoutePath } from "./RoutePath";

function StudentRoute() {
    return (
        [
            {
                index: true,
                element: <Enroll />
            },
            {
                path: StudentRoutePath.ENROLL,
                element: <Enroll />
            },
            {
                path: StudentRoutePath.ENROLL_RESULT,
                element: <EnrollResult />
            }
        ] as RouteObject[]
    )
}

export default StudentRoute;