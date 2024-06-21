import { RouteObject } from "react-router-dom";
import { TeacherRoutePath } from "./RoutePath";
import Section from "../components/main/teacher/Section";

function TeacherRoute() {
    return (
        [
            {
                index: true,
                element: <Section />
            },
            {
                path: TeacherRoutePath.SECTION,
                element: <Section />
            },
            {
                path: TeacherRoutePath.SECTION + "/:filter",
                element: <Section />
            }
        ] as RouteObject[]
    )
}

export default TeacherRoute;