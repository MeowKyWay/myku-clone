function RadioButton({ label, value, onClick, activateColor }: {
    label: string,
    value: boolean,
    onClick: (value: boolean) => void,
    activateColor: string
}) {

    return (
        <div 
            onClick={() => onClick(!value)}
            className="rounded size-fit px-3 py-2 cursor-pointer flex flex-col justify-center items-center text-xs transition-all"
            style={{
                backgroundColor: value? activateColor: 'transparent',
                color: value? 'white': 'black'
            }}
        >{label}</div>
    )
}

export default RadioButton;