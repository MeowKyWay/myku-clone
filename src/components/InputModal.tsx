import { ReactNode } from "react";
import Modal from "./Modal";
import { ButtonType } from "../types/ButtonType";
import Button from "./Button";

interface InputModalFieldType {
    label: string,
    fields: ReactNode,
}

function InputModal({ children, fieldList, onCancle, onConfirm, confirmButtonType, confirmButtonLabel }: {
    children: ReactNode,
    fieldList: InputModalFieldType[],
    onCancle: () => void,
    onConfirm: () => void,
    confirmButtonType: ButtonType,
    confirmButtonLabel: string,
}) {

    const renderField = fieldList.map((field, index) => {
        return (
            <div key={index}>
                <span>{field.label}</span>
                {field.fields}
            </div>
        )
    })

    return (
        <Modal>
            <div className="flex flex-col bg-white rounded">
                <div className="flex flex-col m-4">
                    <span className="font-bold mb-4">{children}</span>
                    {renderField}
                </div>
                <div className="flex flex-row justify-end gap-1 m-1">
                    <Button className="text-xs h-6" onClick={onCancle} type={ButtonType.WARNING}>ยกเลิก</Button>
                    <Button className="text-xs h-6" onClick={onConfirm} type={confirmButtonType}>{confirmButtonLabel}</Button>
                </div>
            </div>
        </Modal>
    )
}

export default InputModal;