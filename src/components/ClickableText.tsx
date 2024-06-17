import { ReactNode } from "react";

function ClickableText({ children, onClick, className = '' }: {
    children: ReactNode,
    onClick?: () => void,
    className?: string,
}) {
    return <span onClick={onClick} className={'text-blue-700 hover:text-blue-500 cursor-pointer ' + className}>{children}</span>;
}

export default ClickableText;