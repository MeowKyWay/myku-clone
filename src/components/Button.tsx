import classNames from "classnames";
import { ReactNode } from "react"
import { ButtonType } from "../types/ButtonType";

function Button({ children, onClick, type = ButtonType.PRIMARY, className = '', disabled = false }: {
    children: ReactNode,
    onClick?: () => void,
    type: ButtonType,
    className?: string
    disabled?: boolean
}
) {
    const classes = classNames('box-border rounded ' + className, {
        'bg-green text-white': type === ButtonType.PRIMARY,
        'bg-blue-500 text-white': type === ButtonType.SECONDARY,
        'bg-white text-black border border-gray-200 hover:bg-gray-200': type === ButtonType.TERTIARY,
        'bg-red-500 text-white': type === ButtonType.WARNING,
        'px-2': !className.includes('px-')
    });

    return (
        <button className={classes} onClick={onClick} disabled={disabled}>{children}</button>
    )
}

export default Button;