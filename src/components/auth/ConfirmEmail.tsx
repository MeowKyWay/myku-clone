import { useState } from "react";
import { confirmSignUp, resendSignUpCode } from "aws-amplify/auth";
import { Link, useNavigate } from "react-router-dom";
import TextField from "../TextField";
import Button from "../Button";
import ClickableText from "../ClickableText";
import { ButtonType } from "../../types/ButtonType";
import { TextFieldType } from "../../types/TextFieldType";
import { useAppSelector } from "../../hooks";

function ConfirmEmail() {

    const [verificationCode, setVerificationCode] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const registerEmail = useAppSelector(state => state.register.email);

    const handleConfirmEmail = async () => {

        setErrorMessage('');

        try {
            await confirmSignUp({
                username: registerEmail,
                confirmationCode: verificationCode,
            });

            navigate('/login');
        }
        catch (error: unknown) {
            switch ((error as Error).name) {
                case 'ExpiredCodeException':
                    setErrorMessage('รหัสยืนยันหมดอายุ ส่งใหม่');
                    break;
                case 'CodeMismatchException':
                    setErrorMessage('รหัสยืนยันไม่ถูกต้อง');
                    break;
                default:
                    setErrorMessage((error as Error).message);
                    console.log((error as Error).name);
            }
            return errorMessage;
        }
    }

    const handleResendCode = async () => {

        setErrorMessage('');

        try {
            await resendSignUpCode({
                username: registerEmail,
            });
        }
        catch (error: unknown) {
            switch ((error as Error).name) {
                case 'LimitExceededException':
                    setErrorMessage('กรุณารอสักครู่ก่อนส่งรหัสใหม่');
                    break;
                default:
                    setErrorMessage((error as Error).message);
                    console.log((error as Error).name);
            }
            return errorMessage;
        }
    }

    return (
        <div className="w-full flex flex-col mb-12">
            <div className="text-center font-light mt-12 mb-4">ยืนยันอีเมล</div>
            <span className="mt-9 text-sm font-light">ส่งรหัสไปที่ {registerEmail}</span>
            <div className="flex flex-row my-4">
                <TextField
                    onChange={setVerificationCode}
                    value={verificationCode}
                    type={TextFieldType.number}
                    autoComplete="one-time-code"
                    className="flex-1"
                >
                    กรอกรหัสยืนยันจากอีเมล
                </TextField>
                <Button onClick={handleResendCode} type={ButtonType.SECONDARY} className="h-10 ml-2 px-1 text-sm">
                    ส่งรหัสใหม่
                </Button>
            </div>
            <div className="flex flex-row justify-end items-center text-xs text-blue-700 font-light relative">
                <span className="absolute left-0 text-red-500">{errorMessage}</span>
                <Link to='/login'>
                    <ClickableText onClick={() => { }}>มีบัญชีอยู่แล้ว ?</ClickableText>
                </Link>
            </div>

            <Button onClick={handleConfirmEmail} type={ButtonType.PRIMARY} className="h-10 w-full text-sm mt-5">
                ยืนยันอีเมล
            </Button>
        </div>
    );
}

export default ConfirmEmail;