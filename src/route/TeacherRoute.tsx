import { RouteObject } from "react-router-dom";
import { TeacherRoutePath } from "./RoutePath";
import Section from "../components/main/teacher/Section";
import SectionStudent from "../components/main/teacher/SectionStudent";

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
            },
            {
                path: TeacherRoutePath.SECTION_STUDENT + "/:sectionID",
                element: <SectionStudent />
            }
        ] as RouteObject[]
    )
}

export default TeacherRoute;