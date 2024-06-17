import NavigationButton from "./NavigationButton";
import { FaUniversity } from "react-icons/fa";
import { MdHomeWork } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";

function AdminNavigation() {
    return (
        <div className="flex flex-col size-full gap-1">
            <NavigationButton
                icon={<FaUniversity />}
                label="จัดการคณะ"
                to="/std/admin/faculty">
            </NavigationButton>
            <NavigationButton
                icon={<MdHomeWork />}
                label="จัดการสาขา"
                to="/std/admin/department">
            </NavigationButton>
            <NavigationButton
                icon={<FaBook />}
                label="จัดการอาจารย์"
                to="/std/admin/teacher">
            </NavigationButton>
            <NavigationButton
                icon={<PiStudentBold />}
                label="จัดการนิสิต"
                to="/std/admin/student">
            </NavigationButton>
        </div>
    )
}

export default AdminNavigation;