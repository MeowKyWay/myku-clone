import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { SectionType, StudentEnrollmentType } from "../../../types/DatabaseType";
import Table from "../../Table";
import Button from "../../Button";
import { ButtonType } from "../../../types/ButtonType";
import { TbRefresh } from "react-icons/tb";
import { generateClient } from "aws-amplify/api";
import { getSectionWithStudent } from "../../../custom_graphql/customQueries";
import { createStudentSection, updateStudentEnrollment } from "../../../graphql/mutations";

function SectionStudent() {

  const client = generateClient();

  const { sectionID } = useParams();

  const [section, setSection] = useState<SectionType | null>(null);

  const fetch = useCallback(async () => {
    try {
      const res = await client.graphql({
        query: getSectionWithStudent,
        variables: {
          id: sectionID as string
        }
      })
      setSection(res.data.getSection as SectionType)
    }
    catch (err) {
      console.log(err)
      setSection({} as SectionType)
    }
  }, [client, sectionID])

  useEffect(() => { // initial fetch
    if (section) return;
    fetch();
  }, [fetch, section]);

  const handleAcceptStudent = async (enrollment: StudentEnrollmentType) => {
    if (!confirm("ต้องการตอบรับการลงทะเบียนของนิสิตคนนี้หรือไม่?")) return;
    console.log(enrollment)
    try {
      await client.graphql({
        query: createStudentSection,
        variables: {
          input: {
            id: enrollment.studentID + ":" + sectionID,
            studentID: enrollment.studentID,
            name: enrollment.name as string,
            sectionID: sectionID as string,
          }
        }
      })

      await client.graphql({
        query: updateStudentEnrollment,
        variables: {
          input: {
            id: enrollment.studentID + ":" + sectionID,
            status: "Success",
          }
        }
      })
      await fetch();
    }
    catch (err) {
      console.log(err);
    }
  }

  const handleRejectStudent = async (enrollment: StudentEnrollmentType) => {
    if (!confirm("ต้องการปฏิเสธการลงทะเบียนของนิสิตคนนี้หรือไม่?")) return;
    try {
      await client.graphql({
        query: updateStudentEnrollment,
        variables: {
          input: {
            id: enrollment.studentID + ":" + sectionID,
            status: "Reject",
          }
        }
      })
      await fetch();
    }
    catch (err) {
      console.log(err)
    }
  }

  const studentTableHeader = (
    <tr>
      <th style={{ width: "2%" }}>no.</th>
      <th style={{ width: "73%" }}>name</th>
    </tr>
  );

  const studentTableBody = section?.students?.items?.map((student, index) => {
    return (
      <tr className="text-sm h-8" key={index}>
        <td className="text-center">{index + 1}</td>
        <td>{student.name}</td>
      </tr>
    );
  });

  const enrollmentTableHeader = (
    <tr>
      <th style={{ width: "2%" }}>no.</th>
      <th style={{ width: "73%" }}>name</th>
      <th style={{ width: "10%" }}>status</th>
      <th>action</th>
    </tr>
  );

  const enrollmentTableBody = section?.studentEnrollments?.items?.map((enrollment, index) => {
    if (enrollment.status !== 'Pending') return null;
    return (
      <tr className="text-sm h-8" key={index}>
        <td className="text-center">{index + 1}</td>
        <td>{enrollment.name}</td>
        <td>{enrollment.status}</td>
        <td>
          <div className="text-center">
            <Button
              onClick={() => handleAcceptStudent(enrollment)}
              type={ButtonType.SECONDARY}
              className="text-sm w-20"
            >
              ยืนยัน
            </Button>
            <Button
              onClick={() => handleRejectStudent(enrollment)}
              type={ButtonType.WARNING}
              className="text-sm w-20"
            >
              ปฏิเสธ
            </Button>
          </div>
        </td>
      </tr>
    );
  });

  return (
    <div className="size-full flex flex-col items-center">
      <div className="w-11/12 h-20 flex flex-row items-center pl-10">
        <span className="text-xl w-80 font-bold">Section Students</span>
        <div className="flex flex-col h-full flex-1 pr-2 justify-end items-end">
          <div className="h-full flex-1 flex flex-row justify-end items-end gap-1">
            <Button
              onClick={() => fetch()}
              type={ButtonType.TERTIARY}
              className="h-6 w-6 mb-1 px-0"
            >
              <TbRefresh className="m-auto" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-11/12 flex-1 flex flex-col justify-start">
        <div className="flex flex-row">
          <div className="flex flex-col flex-1">
            <span>วิชา: {section?.subject?.name}</span>
            <span>หมู่ที่: {section?.name}</span>
            <span>จำนวนที่เปิดรับ: {section?.capacity}</span>
          </div>
          <div className="flex flex-col w-3/5 bg-gray-100 overflow-hidden">
            <Table header={studentTableHeader} body={studentTableBody as JSX.Element[]} className="min-w-150" />
          </div>
        </div>
        <div className="flex flex-col w-full bg-gray-100 overflow-hidden">
          รายชื่อนิสิตขอลงทะเบียน
          <Table header={enrollmentTableHeader} body={enrollmentTableBody as JSX.Element[]} className="min-w-150" />
        </div>
      </div>
    </div>
  );
}

export default SectionStudent;
