import { useEffect, useState } from "react";
import Time from "../../../utility/Time";
import TextField from "../../TextField";
import { TextFieldType } from "../../../types/TextFieldType";
import SubjectRow from "./SubjectRow";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { fetchSubjects } from "../../../store/thunks/subjectsThunk";
import Switch from "../../Switch";
import { fetchMyEnrollment } from "../../../store/thunks/studentEnrollmentsThunk";

function Enroll() {

    const dispatch = useAppDispatch()

    const subjects = useAppSelector(state => state.subjects.data);
    const enrollments = useAppSelector(state => state.user.currentUser.enrollments);

    const subjectErrorMessage = useAppSelector(state => state.subjects.error);
    const enrollmentErrorMessage = useAppSelector(state => state.user.enrollmentsError);

    const [search, setSearch] = useState("");
    const [filterEligible, setFilterEligible] = useState(false);

    useEffect(() => {
        if (!subjects && subjectErrorMessage === '')
            dispatch(fetchSubjects());
        if (!enrollments && enrollmentErrorMessage === '')
            dispatch(fetchMyEnrollment());
    }, [dispatch, subjects, subjectErrorMessage, enrollments, enrollmentErrorMessage]);

    const renderSubjects = subjects?.filter(
        subject => {
            return subject.name.includes(search);
        }
    ).map(subject => {
        return (
            <SubjectRow key={subject.id} subject={subject} filterEligible={filterEligible} />
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
                <div className="flex flex-col px-7 py-1 gap-3">
                    <div className="flex flex-col w-full h-13">
                        <span className="font-light text-sm text-gray-600">ค้นหารายวิชาเพื่อลงทะเบียน</span>
                        <TextField type={TextFieldType.text} onChange={setSearch} value={search} resetButton>
                            ชื่อวิชา
                        </TextField>
                    </div>
                    <div className="flex flex-row w-full h-6 justify-end items-center gap-2 pr-2">
                        <span className="text-sm">หมู่เรียนที่สามารถลงทะเบียนได้</span>
                        <Switch value={filterEligible} onClick={setFilterEligible} />
                    </div>
                    {renderSubjects}
                </div>
            </div>
        </div>
    )
}

export default Enroll;