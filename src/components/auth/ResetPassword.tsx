import { confirmResetPassword, resetPassword } from "aws-amplify/auth";
import { useState } from "react";
import TextField from "../TextField";
import { TextFieldType } from "../../types/TextFieldType";
import Button from "../Button";
import { ButtonType } from "../../types/ButtonType";
import { Link } from "react-router-dom";
import ClickableText from "../ClickableText";

enum ResetPasswordState {
    EMAIL,
    NEWPASSWORD,
    SUCCESS,
}

function ResetPassword() {

    const [email, setEmail] = useState('');
    const [confirmationCode, setConfirmationCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

    const [resetPasswordState, setResetPasswordState] = useState(ResetPasswordState.EMAIL);

    const handleResetPassword = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setErrorMessage('');

        try {
            await resetPassword({
                username: email,
            });

            setResetPasswordState(ResetPasswordState.NEWPASSWORD);
        } catch (error: unknown) {
            switch ((error as Error).name) {
                case 'UserNotFoundException':
                    setErrorMessage('ไม่พบอีเมล');
                    break;
                case 'LimitExceededException':
                    setErrorMessage('ส่งคำขอบ่อยเกินไป ลองใหม่ภายหลัง');
                    break;
                default:
                    console.log(error);
                    setErrorMessage((error as Error).message);
            }
        }
    }

    const handleConfirmResetPassword = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setErrorMessage('');

        try {
            await confirmResetPassword({
                username: email,
                confirmationCode: confirmationCode,
                newPassword: newPassword,
            });

            setResetPasswordState(ResetPasswordState.SUCCESS);
        }
        catch (error: unknown) {
            switch ((error as Error).name) {
                case 'UserNotFoundException':
                    setErrorMessage('ไม่พบอีเมล');
                    break;
                case 'CodeMismatchException':
                    setErrorMessage('รหัสยืนยันไม่ถูกต้อง');
                    break;
                case 'ExpiredCodeException':
                    setErrorMessage('รหัสยืนยันหมดอายุ ลองใหม่ภายหลัง');
                    break;
                case 'LimitExceededException':
                    setErrorMessage('ลองผิดบ่อยเกินไป ลองใหม่ภายหลัง');
                    break;
                default:
                    setErrorMessage((error as Error).name);
            }
        }
    }

    return (
        <div className="flex flex-col w-full px-6 pb-10">
            <div className="text-center font-light mt-12 mb-4">เปลี่ยนรหัสผ่าน{(resetPasswordState == ResetPasswordState.SUCCESS) ? 'สำเร็จ' : ''}</div>
            <div className="mt-5">
                {resetPasswordState === ResetPasswordState.EMAIL && (
                    <form onSubmit={(e) => handleResetPassword(e)}>
                        <div className="flex flex-col h-16 mb-4">
                            <div className="h-6">
                                <label className="text-xs text-gray-600"> บัญชีผู้ใช้เครือข่าย </label>
                            </div>
                            <TextField
                                value={email}
                                onChange={setEmail}
                                type={TextFieldType.email}
                                name="identifier"
                                autoComplete="username"
                            >
                                เช่น example@example.com
                            </TextField>
                        </div>
                        <div className="flex flex-row justify-end items-center text-xs text-blue-700 font-light relative">
                            <span className="absolute left-0 text-red-500">{errorMessage}</span>
                            <Link to="/login">
                                <ClickableText onClick={() => { }}>ลองใหม่ ?</ClickableText>
                            </Link>
                        </div>
                        <Button type={ButtonType.PRIMARY} className="h-10 w-full text-sm mt-5">ส่งรหัสยืนยัน</Button>
                    </form>
                )}
                {resetPasswordState === ResetPasswordState.NEWPASSWORD && (
                    <form onSubmit={(e) => handleConfirmResetPassword(e)}>
                        <div className="flex flex-col h-16 mb-4">
                            <div className="h-6">
                                <label className="text-xs text-gray-600"> รหัสยืนยัน </label>
                            </div>
                            <TextField
                                value={confirmationCode}
                                onChange={setConfirmationCode}
                                type={TextFieldType.number}
                                autoComplete="one-time-code"
                            >
                                รหัสยืนยันที่ได้รับทางอีเมล
                            </TextField>
                        </div>
                        <div className="flex flex-col h-16 mb-4">
                            <div className="h-6">
                                <label className="text-xs text-gray-600"> รหัสผ่านใหม่ </label>
                            </div>
                            <TextField
                                value={newPassword}
                                onChange={setNewPassword}
                                type={TextFieldType.password}
                                name="identifier"
                                autoComplete="new-password"
                            >
                                8 ตัวอักษร ตัวเลข ตัวพิมพ์เล็กและตัวพิมพ์ใหญ่
                            </TextField>
                        </div>
                        <div className="flex flex-col h-16 mb-4">
                            <div className="h-6">
                                <label className="text-xs text-gray-600"> ยืนยันรหัสผ่านใหม่ </label>
                            </div>
                            <TextField
                                value={confirmNewPassword}
                                onChange={setConfirmNewPassword}
                                type={TextFieldType.password}
                                name="identifier"
                                autoComplete="new-password"
                            >
                                8 ตัวอักษร ตัวเลข ตัวพิมพ์เล็กและตัวพิมพ์ใหญ่
                            </TextField>
                        </div>
                        <div className="flex flex-row justify-end items-center text-xs text-blue-700 font-light relative">
                            <span className="absolute left-0 text-red-500">{errorMessage}</span>
                            <Link to="/login">
                                <ClickableText onClick={() => { }}>ลองเข้าสู่ระบบใหม่ ?</ClickableText>
                            </Link>
                        </div>
                        <Button type={ButtonType.PRIMARY} className="h-10 w-full text-sm mt-5">เปลี่ยนรหัสผ่าน</Button>
                    </form>
                )}
                {resetPasswordState === ResetPasswordState.SUCCESS && (
                    <Link to="/login">
                        <Button type={ButtonType.PRIMARY} className="h-10 w-full text-sm mt-5">กลับไปหน้าเข้าสู่ระบบ</Button>
                    </Link>
                )}
            </div>
        </div >
    )
}

export default ResetPassword;