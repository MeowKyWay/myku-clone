import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import ConfirmEmail from "../components/auth/ConfirmEmail";
import { LoginPath } from "../types/LoginPath";
import { PageState } from "../types/PageState";
import { useAppSelector } from "../hooks";
import ResetPassword from "../components/auth/ResetPassword";
import ConfirmSignIn from "../components/auth/ConfirmSignIn";

function LoginPage() {

    const pageState = useAppSelector(state => state.states.pageState);

    if (pageState !== PageState.login) {
        return <div id="login"></div>
    }

    const router = createBrowserRouter([
        {
            path: '/',
            element: (
                <Outlet />
            ),
            children: [
                {
                    index: true,
                    element: <Login />
                },
                {
                    path: LoginPath.login,
                    element: <Login />
                },
                {
                    path: LoginPath.register,
                    element: <Register />
                },
                {
                    path: LoginPath.confirm_email,
                    element: <ConfirmEmail />
                },
                {
                    path: LoginPath.reset_password,
                    element: <ResetPassword />
                },
                {
                    path: LoginPath.confirm_sign_in,
                    element: <ConfirmSignIn />
                }
            ]
        }
    ])

    return (
        <div className="flex flex-row size-full overflow-hidden">
            <div className="w-2/3 bg-black">
            </div>
            <div className="w-1/3 flex flex-col items-center justify-center">
                <div className="px-8 size-full flex flex-col items-center justify-center">
                    <img src="https://my.ku.th/img/KU_Logo_PNG.png" alt="ku-logo" className="size-fit"></img>
                    <RouterProvider router={router} />
                </div>
            </div>
        </div>
    )
}

export default LoginPage;