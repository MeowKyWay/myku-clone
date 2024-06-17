import { RouteObject } from "react-router-dom";

function TeacherRoute() {
    return (
        [
            {
                index: true,
                element: <div>Teacher</div>
            },
        ] as RouteObject[]
    )
}

export default TeacherRoute;