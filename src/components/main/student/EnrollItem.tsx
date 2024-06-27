import { StudentEnrollmentType } from "../../../types/DatabaseType"

function EnrollItem({ enrollment }: {
    enrollment: StudentEnrollmentType
}) {

    return (
        <div className="flex flex-col">
            <div className="flex flex-row w-full bg-white rounded-md h-12 items-center">
                <span className="ml-10 w-80">{enrollment.section?.subject?.name}</span>
                <span className="w-40 text-xs font-light">{"หมู่ " + enrollment.section?.name}</span>
                <span className="text-xs font-light">{enrollment.section?.subject?.credit + " หน่วยกิต"}</span>
            </div>
        </div>

    )
}

export default EnrollItem;