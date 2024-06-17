import { useAppDispatch, useAppSelector } from "../../hooks";
import { setNavigationBarState } from "../../store/slices/statesSlice";
import { UserGroup } from "../../store/slices/userSlice";
import AdminNavigation from "./AdminNavigation";
import StudentNavigation from "./StudentNavigation";

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
            <div className={`h-full ${navibationBarState? 'w-62.5' :  'w-17.5'} bg-gray transition-all overflow-hidden`}>
                {user.groups === UserGroup.ADMIN && <AdminNavigation />}
                {user.groups === UserGroup.STUDENT && <StudentNavigation />}
            </div>
        </div>
    )
}

export default NavigationBar;