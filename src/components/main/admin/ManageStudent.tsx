import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { fetchStudents } from "../../../store/thunks/studentsThunk";
import { ButtonType } from "../../../types/ButtonType";
import Button from "../../Button";
import { TbRefresh } from "react-icons/tb";
import Table from "../../Table";
import { fetchDepartments } from "../../../store/thunks/departmentsThunk";

function ManageStudent() {

  const dispatch = useAppDispatch();

  const students = useAppSelector(state => state.students.data);
  const departments = useAppSelector(state => state.departments.data);

  const studentsErrorMessage = useAppSelector(state => state.students.error);
  const departmentErrorMessage = useAppSelector(state => state.departments.error);

  useEffect(() => { // initial fetch
    if (!students && studentsErrorMessage === "") {
      dispatch(fetchStudents());
    }
    if (!departments && departmentErrorMessage === "") {
      dispatch(fetchDepartments());
    }
  }, [dispatch, students, departments, studentsErrorMessage, departmentErrorMessage])

  const header = (
    <tr>
      <th style={{ width: "2%" }}>no.</th>
      <th style={{ width: "10%" }}>student id</th>
      <th style={{ width: "25%" }}>name</th>
      <th style={{ width: "20%" }}>email</th>
      <th style={{ width: "25%" }}>department</th>
      <th style={{ width: "8%" }}>subjects</th>
      <th style={{ width: "10%" }}>status</th>
    </tr>
  );

  const body = students?.map((student, index) => {
    return (
      <tr className="text-sm h-8" key={index}>
        <td className="text-center">{index + 1}</td>
        <td className="text-center mono">{student.studentID}</td>
        <td>{student.name}</td>
        <td>{student.email}</td>
        <td>
          {departments?.find(department => department.id === student.departmentID)?.name}
        </td>
        <td className="text-center">
          view
        </td>
        <td className="text-center">
          {student.userStatus}
        </td>
      </tr>
    );
  });

  return (
    <div className="size-full flex flex-col items-center">
      <div className="w-11/12 h-20 flex flex-row items-center pl-10">
        <span className="text-xl w-80 font-bold">Manage Student</span>
        <div className="flex flex-col h-full flex-1 pr-2 justify-end items-end">
          <div className="h-full flex-1 flex flex-row justify-end items-end gap-1">
            <Button
              onClick={() => dispatch(fetchStudents())}
              type={ButtonType.TERTIARY}
              className="h-6 w-6 mb-1 px-0"
            >
              <TbRefresh className="m-auto" />
            </Button>
          </div>
          <span className="h-4 text-right text-xs text-red-500 mr-1 mb-1">
            {studentsErrorMessage}
          </span>
        </div>
      </div>
      <div className="w-11/12 flex-1 flex flex-col justify-start">
        <div className="w-full bg-gray-100 overflow-hidden">
          <Table header={header} body={body as JSX.Element[]} className="min-w-150" />
        </div>
      </div>
    </div>
  );
}

export default ManageStudent;
