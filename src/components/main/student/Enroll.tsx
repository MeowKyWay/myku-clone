import { useEffect, useState } from "react";
import Time from "../../../utility/Time";
import TextField from "../../TextField";
import { TextFieldType } from "../../../types/TextFieldType";
import SubjectRow from "./SubjectRow";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { fetchSubjects } from "../../../store/thunks/subjectsThunk";

function Enroll() {

    const dispatch = useAppDispatch()

    const subjects = useAppSelector(state => state.subjects.data);

    const [search, setSearch] = useState("");

    useEffect(() => {
        if (subjects) return;
        dispatch(fetchSubjects());
    })

    const renderSubjects = subjects?.map(subject => {
        return (
            <SubjectRow key={subject.id} subject={subject} />
        )
    })

    return (
        <div className="py-6 size-main">
            <div className="flex flex-col size-full">
                <div className="flex flex-row h-21.5 w-full px-4 border-b bordor-gray-500">
                    <div className="w-2/3 px-3 flex flex-col gap-2">
                        <span className="font-medium text-2xl text-gray-600">ลงทะเบียนเรียน</span>
                        <span className="text-green font-light text-sm">{Time.dayOfWeek(Time.now()) + ", " + Time.dayOfLife(Time.now())}</span>
                    </div>
                    <div className="w-1/3 px-3">
                    </div>

                </div>
                <div className="flex flex-col px-7 py-1 gap-4">
                    <div className="flex flex-col w-full h-13">
                        <span className="font-light text-sm text-gray-600">ค้นหารายวิชาเพื่อลงทะเบียน</span>
                        <TextField type={TextFieldType.text} onChange={setSearch} value={search} resetButton>
                            ชื่อวิชา
                        </TextField>
                    </div>
                    {renderSubjects}
                </div>
            </div>
        </div>
    )
}

export default Enroll;