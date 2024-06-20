import NavigationButton from "./NavigationButton";
import { FaUniversity } from "react-icons/fa";
import { MdHomeWork } from "react-icons/md";
import { TeacherRoutePath } from "../../route/RoutePath";

function TeacherNavigation() {
    return (
        <div className="flex flex-col size-full gap-1">
            <NavigationButton
                icon={<FaUniversity />}
                label="วิชาของฉัน"
                to={TeacherRoutePath.SUBJECT}>
            </NavigationButton>
            <NavigationButton
                icon={<MdHomeWork />}
                label="หมู่เรียนของฉัน"
                to={TeacherRoutePath.SUBJECT_SECTION}>
            </NavigationButton>
        </div>
    )
}

export default TeacherNavigation;