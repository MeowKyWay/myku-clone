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
            >
                <option key={-1} value="">select</option>
                {list.map((item, index) => {
                    return (
                        (value === item.id)? <option key={index} value={item.id} selected>{item.name}</option>
                        : <option key={index} value={item.id}>{item.name}</option>
                    )
                })}
            </select>
            <RiExpandUpDownFill className="absolute right-2 h-full z-0" />
        </div>
    )

}

export default Dropdown;