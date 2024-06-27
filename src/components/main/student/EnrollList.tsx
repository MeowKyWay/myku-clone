import { StudentEnrollmentType } from "../../../types/DatabaseType";
import EnrollItem from "./EnrollItem";

function EnrollList({ enrollments, label }: { enrollments: StudentEnrollmentType[], label: string}) {

    const renderEnrollment = () => {
        return enrollments?.map((enrollment) => {
            return (
                <EnrollItem key={enrollment.id} enrollment={enrollment} />
            )
        });
    }

    const countEnrollment = () => {
        return enrollments.length;
    }

    const statusCreditSum = () => {
        let credit = 0;
        enrollments?.map(enrollment => {
            credit += enrollment.section?.subject?.credit || 0;
        });

        return credit;
    }

    return (
        <div className="flex flex-col items-center border-box border-t border-gray">
            <div className="flex flex-col w-2/3">
                <div className="flex flex-row w-full gap-2 py-4">
                    <span className="text-sm">{label}</span>
                    <span className="flex-1"></span>
                    <span className="text-sm">ทั้งหมด {countEnrollment()} วิชา {statusCreditSum()} หน่วยกิต</span>
                </div>
                <div className="flex flex-col gap-2 pb-2">
                    {renderEnrollment()}
                </div>
            </div>
        </div>
    )
}

export default EnrollList;