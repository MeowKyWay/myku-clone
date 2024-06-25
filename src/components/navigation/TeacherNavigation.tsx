import NavigationButton from "./NavigationButton";
import { MdHomeWork } from "react-icons/md";
import { TeacherRoutePath } from "../../route/RoutePath";

function TeacherNavigation() {
    return (
        <div className="flex flex-col size-full gap-1">
            <NavigationButton
                icon={<MdHomeWork />}
                label="หมู่เรียน"
                to={TeacherRoutePath.SECTION}>
            </NavigationButton>
        </div>
    )
}

export default TeacherNavigation;