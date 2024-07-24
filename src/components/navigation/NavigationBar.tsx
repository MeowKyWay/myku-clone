import { useAppDispatch, useAppSelector } from "../../hooks";
import { setNavigationBarState } from "../../store/slices/statesSlice";
import { UserGroup } from "../../store/slices/userSlice";
import AdminNavigation from "./AdminNavigation";
import StudentNavigation from "./StudentNavigation";
import TeacherNavigation from "./TeacherNavigation";

function NavigationBar() {

    const user = useAppSelector(state => state.user.currentUser);

    const dispatch = useAppDispatch();
    const navibationBarState = useAppSelector(state => state.states.navigationBarState);

    return (
        <div
            className="h-full fixed left-0 top-0 z-50"
            onMouseEnter={() => dispatch(setNavigationBarState(true))}
            onMouseLeave={() => dispatch(setNavigationBarState(false))}
        >
            <div className={`h-full ${navibationBarState ? 'w-62.5' : 'w-17.5'} bg-gray transition-all overflow-hidden`}>
                <div className="flex flex-col">
                    <div className="flex flex-row items-center gap-4">
                        <div className="rounded-full h-10 w-10 bg-white ml-3.75 my-4"></div>
                        { navibationBarState &&
                            <span className="text-white">{user.attributes.name}</span>
                        }
                    </div>
                    
                    {user.groups === UserGroup.ADMIN && <AdminNavigation />}
                    {user.groups === UserGroup.TEACHER && <TeacherNavigation />}
                    {user.groups === UserGroup.STUDENT && <StudentNavigation />}
                </div>

            </div>
        </div>
    )
}

export default NavigationBar;