import { RouteObject } from "react-router-dom";
import Enroll from "../components/main/student/Enroll";

function StudentRoute() {
    return (
        [
            {
                index: true,
                element: <Enroll />
            },
            {
                path: '/std/enroll',
                element: <Enroll />
            }
        ] as RouteObject[]
    )
}

export default StudentRoute;