import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { TextFieldType } from "../types/TextFieldType";
import classNames from "classnames";

function TextField({ children, onChange, value, className, type, name, autoComplete, spellCheck = false }: {
    children?: string,
    onChange: (value: string) => void,
    value: string,
    className?: string,
    type: TextFieldType,
    name?: string,
    autoComplete?: string,
    spellCheck?: boolean,
}) {

    const [hidden, setHidden] = useState(type === TextFieldType.password);

    const classes = classNames(
        [
            'flex flex-row items-center',
            'h-10 border border-gray text-sm font-light focus-within:border-green rounded transition-all',
            className
        ],
    );

    const inputClassName = classNames(
        [
            'px-3.5 py-1.5 flex-1 focus:outline-none rounded',
        ],
    );

    return (
        <div className={classes}>
            <input
                type={(type === TextFieldType.password)? (hidden)? 'password': 'text' : type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={children}
                className={inputClassName}
                name={name}
                autoComplete={autoComplete}
                spellCheck={spellCheck}
            >
            </input>
            {type===TextFieldType.password && (
                <button onClick={() => setHidden(!hidden)} className='w-9 h-9 grid place-content-center'>
                    {hidden && <FaEyeSlash className="text-lg text-gray-400" />}
                    {!hidden && <FaEye className="text-lg text-gray-400" />}
                </button>

            )}
        </div>

    )
}

export default TextField;