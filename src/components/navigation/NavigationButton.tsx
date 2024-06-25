import { ReactNode } from "react";
import { useAppSelector } from "../../hooks";
import { Link, useLocation } from "react-router-dom";

function NavigationButton({ icon, label, to }: {
    icon: ReactNode,
    label: string,
    to: string,
}) {

    const navigationBarState = useAppSelector(state => state.states.navigationBarState);

    const location = useLocation();

    return (
        <Link to={to}>
            <div className={
                `flex flex-row items-center 
                text-white 
                w-full h-11.25 pl-6.75
                overflow-hidden transition-all
                ${location.pathname.startsWith(to + '/') || location.pathname === to ? 'bg-green' : 'bg-transparent'}
                `
            }>
                <div className={`${navigationBarState ? 'mr-4' : 'mr-6.75'} transition-all`}>
                    {icon}
                </div>
                <span className="mt-0.5 text-nowrap text-sm font-light">
                    {label}
                </span>
            </div>
        </Link>
    )
}

export default NavigationButton;