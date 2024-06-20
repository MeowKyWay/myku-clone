import React, { useState } from "react";
import { setUser } from "../../store/slices/userSlice";
import TextField from "../TextField";
import Button from "../Button";
import { ButtonType } from "../../types/ButtonType";
import ClickableText from "../ClickableText";
import { Link, useNavigate } from "react-router-dom";
import { TextFieldType } from "../../types/TextFieldType";
import { setPageState } from "../../store/slices/statesSlice";
import { PageState } from "../../types/PageState";
import { useAppDispatch } from "../../hooks";
import { resendSignUpCode, signIn, signOut } from "aws-amplify/auth";
import AuthUtils from "../../utility/AuthUtils";
import { LoginPath } from "../../types/LoginPath";
import { setRegisterEmail } from "../../store/slices/registerSlice";

function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setErrorMessage("");

    try {
      const user = await signIn({
        username: email,
        password: password,
      });

      if (user.nextStep.signInStep === "CONFIRM_SIGN_IN_WITH_NEW_PASSWORD_REQUIRED") {
        navigate(LoginPath.confirm_sign_in)
        return;
      }

      const currentUser = await AuthUtils.getCurrentUser();

      dispatch(setUser(currentUser));

      dispatch(setPageState(PageState.main));
      navigate("/std");
    } catch (error: unknown) {
      signOut();
      switch ((error as Error).name) {
        case "UserNotFoundException":
          setErrorMessage("ไม่พบอีเมล");
          break;
        case "NotAuthorizedException":
          switch ((error as Error).message) {
            case "Incorrect username or password.":
              setErrorMessage("รหัสผ่านผิด");
              break;
            default:
              setErrorMessage((error as Error).message);
          }
          break;
        case "UserUnAuthenticatedException":
          resendSignUpCode({ username: email });
          dispatch(setRegisterEmail(email));
          navigate(LoginPath.confirm_email);
          break;
        default:
          setErrorMessage((error as Error).message);
      }
      return errorMessage;
    }
  };

  return (
    <div className="flex flex-col w-full px-6 pb-10">
      <div className="text-center font-light mt-12 mb-4">
        เข้าใช้งานระบบลงทะเบียนนิสิต
      </div>
      <div className="mt-5">
        <form onSubmit={(e) => handleLogin(e)}>
          <div className="flex flex-col h-16 mb-4">
            <div className="h-6">
              <label className="text-xs text-gray-600">
                บัญชีผู้ใช้เครือข่าย
              </label>
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
          <div className="flex flex-col h-16 mb-4">
            <div className="h-6">
              <label className="text-xs text-gray-600"> รหัสผ่าน </label>
            </div>
            <TextField
              value={password}
              onChange={setPassword}
              type={TextFieldType.password}
              name="password"
              autoComplete="current-password"
            >
              รหัสผ่านบัญชีผู้ใช้
            </TextField>
          </div>
          <div className="flex flex-row justify-end items-center text-xs text-blue-700 font-light relative">
            <span className="absolute left-0 text-red-500">{errorMessage}</span>
            <Link to="/reset-password">
              <ClickableText onClick={() => { }}>ลืมรหัสผ่าน ?</ClickableText>
            </Link>
            <span className="mx-2 text-sm text-gray-200 font-heavy">|</span>
            <Link to="/register">
              <ClickableText onClick={() => { }}>ไม่มีบัญชี ?</ClickableText>
            </Link>
          </div>
          <Button
            type={ButtonType.PRIMARY}
            className="h-10 w-full text-sm mt-5"
          >
            เข้าสู่ระบบ
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
