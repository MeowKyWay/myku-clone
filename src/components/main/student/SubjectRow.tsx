import { useState } from "react";
import { MdExpandLess } from "react-icons/md";
import { MdExpandMore } from "react-icons/md";
import { SectionType, SubjectType } from "../../../types/DatabaseType";
import Button from "../../Button";
import { ButtonType } from "../../../types/ButtonType";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { addStudentSection } from "../../../store/thunks/studentSectionsThunk";
import { addStudentEnrollment } from "../../../store/thunks/studentEnrollmentsThunk";

function SubjectRow({ subject, filterEligible }: { subject: SubjectType, filterEligible: boolean }) {

    const dispatch = useAppDispatch();

    const [isExpanded, setIsExpanded] = useState(false)

    const user = useAppSelector(state => state.user.currentUser)
    const enrollments = useAppSelector(state => state.user.currentUser.enrollments);

    let subjectSections = subject.sections?.items as SectionType[];

    if (filterEligible) {
        const eligibleSections = subject.sections?.items.filter(section => {
            return section.eligibleDepartments?.items.find(eligibleDepartment => {
                return eligibleDepartment.department?.id === user.attributes["custom:departmentID"];
            })
        })
        if (subject.sections)
            subjectSections = eligibleSections || []
    }

    const handleEnroll = async (sectionID: string) => {
        if (!confirm("คุณต้องการลงทะเบียนหรือไม่")) return;
        await dispatch(addStudentEnrollment(sectionID));
        await dispatch(addStudentSection({ sectionID: sectionID }));
        confirm("ส่งคำขอลงทะเบียนสำเร็จ ติดตามผลได้ที่หน้าผลการลงทะเบียน");
    }

    const renderSections = subjectSections.map(section => {
        let eligible = true
        let alreadyEnrolled = false
        if (section.eligibleDepartments?.items.map(
            eligibleDepartment => eligibleDepartment.department?.id
        ).indexOf(user.attributes["custom:departmentID"]) === -1) eligible = false;
        if (enrollments?.find(enrollment => enrollment.section?.subjectID === section.subjectID)) {
            alreadyEnrolled = true;
            eligible = false;
        }
        return (
            <div key={section.id} className="flex flex-row py-4 pr-20 border-box border-t border-gray-200">
                <span className="w-20 text-sm">{"หมู่ " + section.name}</span>
                <span className="text-xs font-light mr-2">สาขาที่มีสิทธิ์ : </span>
                <div className="flex flex-col w-80">
                    {section.eligibleDepartments?.items.map((eligibleDepartment, index) => {
                        return (
                            <span key={index} className="text-xs font-light">{eligibleDepartment.department?.name}</span>
                        )
                    })}
                </div>
                <span className="text-xs font-light">{"จำนวนที่เปิดรับ " + section.capacity}</span>
                <div className="flex-1"></div>
                <Button
                    type={eligible ? ButtonType.PRIMARY : ButtonType.WARNING}
                    className="h-8 w-40"
                    onClick={() => handleEnroll(section.id)}
                    disabled={!eligible}
                >
                    {alreadyEnrolled ? "ลงทะเบียนแล้ว" : eligible ? "ลงทะเบียน" : "ไม่ผ่านเงื่อนไข"}
                </Button>
            </div>
        )
    })

    return (
        subjectSections.length !== 0 &&
        <div className="flex flex-col">
            <div className="flex flex-col w-full bg-white rounded px-4">
                <div onClick={() => setIsExpanded(!isExpanded)} className="flex flex-row h-15 items-center pr-8 cursor-pointer">
                    <span className="w-80 font-medium text-sm">{subject.name}</span>
                    <span className="font-light text-xs">{subject.credit + " หน่วยกิจ"}</span>
                    <div className="flex-1"></div>
                    {isExpanded ? <MdExpandLess size={20} /> : <MdExpandMore size={20} />}
                </div>
                { isExpanded &&
                    <div className="flex flex-col pb-2">
                        {renderSections}
                    </div>
                }

            </div>
        </div>
    )
}

export default SubjectRow;