import classNames from "classnames";
import { RiExpandUpDownFill } from "react-icons/ri";

interface DropdownItem {
    id: string;
    name: string;
}

function Dropdown<T extends DropdownItem>({ children, onChange, list, value, className, name, disabled=false }: {
    children?: string,
    onChange: (value: string) => void,
    list: T[],
    value?: string,
    className?: string,
    name?: string,
    disabled?: boolean,
}) {

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        event.preventDefault();
        if (!event.target.value) {
            onChange('');
        }
        onChange(event.target.value);
    }

    const classes = classNames(
        [
            'flex flex-row items-center',
            'border border-gray rounded',
            'font-light text-left',
            { 'bg-gray-200': disabled },
            'cursor-pointer focus:outline-none',
            'pl-2',
            'transition-all',
            'absolute z-10 w-full',
            'size-full',
        ],
    );

    return (
        <div className={"relative " + className}>
            <select
                aria-placeholder={children}
                onChange={(e) => handleChange(e)}
                className={classes}
                name={name}
                disabled={disabled}
                value={value}
            >
                <option key={-1} value="">select</option>
                {list && list.map((item, index) => {
                    return (
                        <option key={index} value={item.id}>{item.name}</option>
                    )
                })}
            </select>
            <div className="absolute right-2 h-full z-0">
                <RiExpandUpDownFill className="h-full" />
            </div>
            
        </div>
    )

}

export default Dropdown;