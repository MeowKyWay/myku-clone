import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setRegisterEmail } from "../../store/slices/registerSlice";
import TextField from "../TextField";
import { TextFieldType } from "../../types/TextFieldType";
import ClickableText from "../ClickableText";
import Button from "../Button";
import { ButtonType } from "../../types/ButtonType";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { signUp } from "aws-amplify/auth";
import Dropdown from "../Dropdown";
import Time from "../../utility/Time";
import { fetchFacultiesPublic } from "../../store/thunks/facultiesThunk";
import { fetchDepartmentsPublic } from "../../store/thunks/departmentsThunk";
import { DepartmentType, FacultyType } from "../../types/DatabaseType";


function Register() {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const faculties = useAppSelector(state => state.register.faculties);
    const departments = useAppSelector(state => state.register.departments);
    const registerError = useAppSelector(state => state.register.error);

    const [name, setName] = useState("");
    const [studentID, setStudentID] = useState('');
    const [email, setEmail] = useState('');
    const [faculty, setFaculty] = useState('');
    const [department, setDepartment] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (!faculties && registerError === '')
            dispatch(fetchFacultiesPublic());
        if (!departments && registerError === '')
            dispatch(fetchDepartmentsPublic());
    }, [dispatch, faculties, departments, registerError])

    const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setErrorMessage('');

        if (password !== confirmPassword) {
            setErrorMessage('รหัสผ่านไม่ตรงกัน');
            return errorMessage;
        }
        if (!studentID || !email || !password || !confirmPassword || !faculty || !department) {
            setErrorMessage('กรุณากรอกข้อมูลให้ครบถ้วน');
            return errorMessage;
        }
        try {
            await signUp({
                username: email,
                password: password,
                options: {
                    userAttributes: {
                        name: name,
                        email: email,
                        'custom:studentId': studentID,
                        'custom:status': 'current',
                        'custom:departmentID': department,
                        'custom:admissionYear': Time.getYear(Time.now())
                    }
                }
            });

            dispatch(setRegisterEmail(email));
            navigate('/confirm-email');

            return;
        }
        catch (error: unknown) {
            switch ((error as Error).name) {
                case 'InvalidParameterException':
                    setErrorMessage('รหัสนิสิตไม่ถูกต้อง');
                    break;
                case 'InvalidPasswordException':
                    setErrorMessage('รหัสผ่านไม่ถูกต้อง');
                    break;
                case 'UsernameExistsException':
                    setErrorMessage('อีเมลนี้มีผู้ใช้งานแล้ว');
                    break;
                default:
                    setErrorMessage((error as Error).message);
                    console.log((error as Error).name);
            }
            return errorMessage;
        }

    }

    return (
        <div className="flex flex-col w-full px-6 pb-2">
            <div className="text-center font-light mt-12 mb-4">ลงทะเบียนบัญชีนิสิต</div>
            <div className="mt-5">
                <form onSubmit={(e) => handleRegister(e)}>
                    <div className="flex flex-col gap-1">
                        <div className="flex flex-col h-16">
                            <div className="h-6">
                                <label className="text-xs text-gray-600"> ชื่อ-นามสกุล </label>
                            </div>
                            <TextField
                                value={name}
                                onChange={setName}
                                type={TextFieldType.text}
                                name="name"
                                autoComplete="name"
                            >
                                เช่น สมชาย ใจดี
                            </TextField>
                        </div>
                        <div className="flex flex-col h-16">
                            <div className="h-6">
                                <label className="text-xs text-gray-600"> รหัสนิสิต </label>
                            </div>
                            <TextField
                                value={studentID}
                                onChange={setStudentID}
                                type={TextFieldType.text}
                                name="username"
                                autoComplete="username"
                            >
                                เช่น 64xxxxxxxx
                            </TextField>
                        </div>
                        <div className="flex flex-col h-16">
                            <div className="h-6">
                                <label className="text-xs text-gray-600"> อีเมล </label>
                            </div>
                            <TextField
                                value={email}
                                onChange={setEmail}
                                type={TextFieldType.email}
                                name="email"
                                autoComplete="email"
                            >
                                เช่น example@example.com
                            </TextField>
                        </div>
                        <div className="flex flex-col h-16">
                            <div className="flex flex-row gap-2">
                                <div className="flex-1">
                                    <div className="h-6">
                                        <label className="text-xs text-gray-600"> คณะ </label>
                                    </div>
                                    <Dropdown
                                        onChange={setFaculty}
                                        list={faculties as FacultyType[]}
                                        name="faculty"
                                        className="w-full h-10 text-xs"
                                    >
                                        กรุณาเลือกภาควิชา
                                    </Dropdown>
                                </div>
                                <div className="flex-1">
                                    <div className="h-6">
                                        <label className="text-xs text-gray-600"> ภาควิชา </label>
                                    </div>
                                    <Dropdown
                                        onChange={setDepartment}
                                        list={departments?.filter((department) => department.facultyID === faculty) as DepartmentType[]}
                                        name="department"
                                        className="flex-1 h-10 text-xs"
                                        disabled={!faculty}
                                    >
                                        กรุณาเลือกภาควิชา
                                    </Dropdown>
                                </div>
                            </div>

                        </div>
                        <div className="flex flex-col h-16">
                            <div className="h-6">
                                <label className="text-xs text-gray-600"> รหัสผ่าน </label>
                            </div>
                            <TextField
                                value={password}
                                onChange={setPassword}
                                type={TextFieldType.password}
                                name="password"
                                autoComplete="new-password"
                            >
                                8 ตัวอักษร ตัวเลข ตัวพิมพ์เล็กและตัวพิมพ์ใหญ่
                            </TextField>
                        </div>
                        <div className="flex flex-col h-16">
                            <div className="h-6">
                                <label className="text-xs text-gray-600"> ยืนยันรหัสผ่าน </label>
                            </div>
                            <TextField
                                value={confirmPassword}
                                onChange={setConfirmPassword}
                                type={TextFieldType.password}
                                name="confirm_password"
                                autoComplete="new-password"
                            >
                                8 ตัวอักษร ตัวเลข ตัวพิมพ์เล็กและตัวพิมพ์ใหญ่
                            </TextField>
                        </div>
                        <div className="flex flex-row justify-end items-center text-xs text-blue-700 font-light relative">
                            <span className="absolute left-0 text-red-500">{errorMessage}</span>
                            <Link to='/login'>
                                <ClickableText onClick={() => { }}>มีบัญชีอยู่แล้ว ?</ClickableText>
                            </Link>
                        </div>

                    </div>
                    <Button type={ButtonType.PRIMARY} className="h-10 w-full text-sm mt-5">สร้างบัญชี</Button>
                </form>
            </div>
        </div >
    )
}

export default Register;