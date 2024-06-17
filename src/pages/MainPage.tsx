import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { PageState } from "../types/PageState";
import Header from "../components/Header";
import NavigationBar from "../components/navigation/NavigationBar";
import { useAppSelector } from "../hooks";
import StudentRoute from "../route/StudentRoute";
import TeacherRoute from "../route/TeacherRoute";
import AdminRoute from "../route/AdminRoute";
import { UserGroup } from "../store/slices/userSlice";

function MainPage() {

    const pageState = useAppSelector(state => state.states.pageState);

    const user = useAppSelector(state => state.user.currentUser);

    if (pageState !== PageState.main) {
        return <div id="main"></div>
    }

    let route;

    switch (user.groups) {
        case UserGroup.STUDENT:
            route = StudentRoute();
            break;
        case UserGroup.TEACHER:
            route = TeacherRoute();
            break;
        case UserGroup.ADMIN:
            route = AdminRoute();
            break;
    }

    const router = createBrowserRouter([
        {
            path: '/std',
            element: (
                <div className="size-full flex flex-col relative overflow-y-scroll">
                    <Header />
                    <NavigationBar />
                    <div className="pl-17.5 mt-15 flex-1 w-full">
                        <Outlet />
                    </div>
                </div>
                
            ),
            children: route,
        }
    ])

    return (
        <RouterProvider router={router} />
    )
}

export default MainPage;