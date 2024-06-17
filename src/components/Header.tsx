import { signOut } from "aws-amplify/auth";
import { logout } from "../store/slices/userSlice";
import { setPageState } from "../store/slices/statesSlice";
import { PageState } from "../types/PageState";
import Button from "./Button";
import { ButtonType } from "../types/ButtonType";
import { IoPower } from "react-icons/io5";
import { useAppDispatch } from "../hooks";

function Header() {

    const dispatch = useAppDispatch();

    const handleSignOut = async () => {
        try {
            await signOut();
            dispatch(logout());
            dispatch(setPageState(PageState.login));
            window.history.pushState({}, '', '/login');
        }
        catch (error: unknown) {
            console.log((error as Error).name);
        }
    }

    return (
        <div className="h-15 w-full bg-green text-base font-light text-white flex flex-row items-center fixed left-0 top-0">
            <span className="flex-1 flex flex-col items-center overflow-hidden text-nowrap">ระบบลงทะเบียนนิสิต มหาวิทยาลัยเกษตรศาสตร์</span>
            <div className="flex flex-row justify-center">
                <span className="text-sm mr-4"></span>
                <Button className="mr-4" type={ButtonType.PRIMARY} onClick={handleSignOut}>
                    <IoPower className="text-lg" />
                </Button>
            </div>

        </div>
    )
}

export default Header;