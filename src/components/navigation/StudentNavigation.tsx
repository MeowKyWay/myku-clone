import { FaUniversity } from "react-icons/fa";
import NavigationButton from "./NavigationButton";
import { StudentRoutePath } from "../../route/RoutePath";

function StudentNavigation() {
    return (
        <div className="flex flex-col size-full gap-1">
            <NavigationButton
                icon={<FaUniversity />}
                label="ลงทะเบียน"
                to={StudentRoutePath.ENROLL}>
            </NavigationButton>
            <NavigationButton
                icon={<FaUniversity />}
                label="ผลการลงทะเบียน"
                to={StudentRoutePath.ENROLL_RESULT}>
            </NavigationButton>
        </div>
    )
}

export default StudentNavigation;