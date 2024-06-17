import { ReactNode } from "react";

function Modal( { children }: {
    children: ReactNode,
} ) {
    return (
        <div className="fixed w-screen h-screen bg-gray-400/75 z-50 right-0 top-0 grid place-content-center">
            {children}
        </div>
    )
}

export default Modal;