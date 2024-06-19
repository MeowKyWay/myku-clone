import { RouteObject } from "react-router-dom";

function TeacherRoute() {
    return (
        [
            {
                index: true,
                element: <div>Teacher</div>
            },
            {
                path: '/std/teacher/subjects',
                element: <div>Subjects</div>
            },
        ] as RouteObject[]
    )
}

export default TeacherRoute;