import NavigationButton from "./NavigationButton";
import { FaUniversity } from "react-icons/fa";
import { MdHomeWork } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { AdminRoutePath } from "../../route/RoutePath";

function AdminNavigation() {
    return (
        <div className="flex flex-col size-full gap-1">
            <NavigationButton
                icon={<FaUniversity />}
                label="จัดการคณะ"
                to={AdminRoutePath.FACULTY}>
            </NavigationButton>
            <NavigationButton
                icon={<MdHomeWork />}
                label="จัดการสาขา"
                to={AdminRoutePath.DEPARTMENT}>
            </NavigationButton>
            <NavigationButton
                icon={<FaBookOpen />}
                label="จัดการวิชา"
                to={AdminRoutePath.SUBJECT}>
            </NavigationButton>
            <NavigationButton
                icon={<FaBook />}
                label="จัดการอาจารย์"
                to={AdminRoutePath.TEACHER}>
            </NavigationButton>
            <NavigationButton
                icon={<PiStudentBold />}
                label="จัดการนิสิต"
                to={AdminRoutePath.STUDENT}>
            </NavigationButton>
        </div>
    )
}

export default AdminNavigation;