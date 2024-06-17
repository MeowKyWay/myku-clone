import { useState } from "react";
import { confirmSignIn, signOut } from "aws-amplify/auth";
import { Link, useNavigate } from "react-router-dom";
import TextField from "../TextField";
import Button from "../Button";
import ClickableText from "../ClickableText";
import { ButtonType } from "../../types/ButtonType";
import { TextFieldType } from "../../types/TextFieldType";
import { LoginPath } from "../../types/LoginPath";

function ConfirmSignIn() {

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const handleConfirmSignIn = async () => {

        setErrorMessage('');

        console.log(password)

        try {
            await confirmSignIn({
                challengeResponse: password,
            });

            signOut();
            navigate(LoginPath.login);
        }
        catch (error: unknown) {
            switch ((error as Error).name) {
                default:
                    setErrorMessage((error as Error).message);
                    console.log((error as Error).name);
            }
            return errorMessage;
        }
    }

    return (
        <div className="w-full flex flex-col mb-12">
            <div className="text-center font-light mt-12 mb-4">เปลี่ยนรหัสผ่านครั้งแรก</div>
            <span className="mt-9 text-sm font-light">รหัสผ่านใหม่</span>
            <div className="flex flex-row my-4">
                <TextField
                    onChange={setPassword}
                    value={password}
                    type={TextFieldType.password}
                    name="password"
                    autoComplete="new-password"
                    className="w-full"
                >
                    8 ตัวอักษร ตัวเลข ตัวพิมพ์เล็กและตัวพิมพ์ใหญ่
                </TextField>
            </div>
            <div className="flex flex-row my-2">
                <TextField
                    onChange={setConfirmPassword}
                    value={confirmPassword}
                    type={TextFieldType.password}
                    name="confirm_password"
                    autoComplete="new-password"
                    className="w-full"
                >
                    ยืนยันรหัสผ่านใหม่
                </TextField>
            </div>
            <div className="flex flex-row justify-end items-center text-xs text-blue-700 font-light relative">
                <span className="absolute left-0 text-red-500">{errorMessage}</span>
                <Link to='/login'>
                    <ClickableText onClick={() => { }}>มีบัญชีอยู่แล้ว ?</ClickableText>
                </Link>
            </div>

            <Button onClick={handleConfirmSignIn} type={ButtonType.PRIMARY} className="h-10 w-full text-sm mt-5">
                เปลี่ยนรหัสผ่าน
            </Button>
        </div>
    );
}

export default ConfirmSignIn;