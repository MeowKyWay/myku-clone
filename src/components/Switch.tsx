function Switch({ value, onClick }: {
    value: boolean,
    onClick: (value: boolean) => void
}) {

    return (
        <div>
            <div
                onClick={() => onClick(!value)}
                className={"w-10 h-6 rounded-xl bg-gray-200 switch px-1 " + ((value)? "switch:active" : "switch:inactive")}
            >
                <div className={"w-4 h-4 rounded-full bg-white switch-circle"}></div>
            </div>
        </div>
    )
}

export default Switch;