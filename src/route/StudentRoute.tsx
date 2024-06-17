import { RouteObject } from "react-router-dom";
import Announcement from "../components/main/student/Announcement";

function StudentRoute() {
    return (
        [
            {
                index: true,
                element: <Announcement />
            },
            {
                path: '/std/classroom',
                element: <div>classroom</div>
            },
        ] as RouteObject[]
    )
}

export default StudentRoute;