import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { DepartmentType, SubjectType } from "../../../types/DatabaseType";
import Table from "../../Table";
import Button from "../../Button";
import { ButtonType } from "../../../types/ButtonType";
import TextField from "../../TextField";
import { TextFieldType } from "../../../types/TextFieldType";
import InputModal from "../../InputModal";
import { TbRefresh } from "react-icons/tb";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { AdminRoutePath } from "../../../route/RoutePath";
import { addSubject, fetchSubjects, putSubject, removeSubject } from "../../../store/thunks/subjectsThunk";
import { fetchDepartments } from "../../../store/thunks/departmentsThunk";
import Dropdown from "../../Dropdown";

function ManageSubject() {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const subjects = useAppSelector(state => state.subjects.data);
  const departments = useAppSelector(state => state.departments.data);

  const updatingSubject = useRef<SubjectType>();

  const [name, setName] = useState("");
  const [credit, setCredit] = useState("");
  const [department, setDepartment] = useState("");

  const subjectsErrorMessage = useAppSelector(state => state.subjects.error);
  const departmentErrorMessage = useAppSelector(state => state.departments.error);

  const { filter } = useParams();

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  useEffect(() => { // on close modal reset input state
    if (showCreateModal || showUpdateModal) return;
    setName("");
    setCredit("");
    setDepartment("");
  }, [showCreateModal, showUpdateModal])

  useEffect(() => { // initial fetch

    if (!subjects && subjectsErrorMessage === "") {
      dispatch(fetchSubjects());
    }
    if (!departments && departmentErrorMessage === "") {
      dispatch(fetchDepartments());
    }
  }, [dispatch, subjects, departments, subjectsErrorMessage, departmentErrorMessage])

  const handleCreateSubject = async () => {
    if (!confirm("Are you sure you want to create this subject?")) return;
    await dispatch(addSubject({
      name: name,
      credit: Number(credit),
      departmentID: department,
    }));

    setShowCreateModal(false);
  };

  const handleUpdateSubject = async () => {
    if (!confirm("Are you sure you want to update this subject?")) return;
    await dispatch(putSubject({
      id: updatingSubject.current?.id as string,
      name: name,
      credit: Number(credit),
    }))

    setShowUpdateModal(false);
  };

  const handleDeleteSubject = async (id: string) => {
    if (!confirm("Are you sure you want to delete this subject?")) return;
    await dispatch(removeSubject(id));
  };

  const header = (
    <tr>
      <th style={{ width: "2%" }}>no.</th>
      <th style={{ width: "38%" }}>name</th>
      <th style={{ width: "35%" }}>departments</th>
      <th style={{ width: "10%" }}>section</th>
      <th style={{ width: "15%" }}>action</th>
    </tr>
  );

  const body = subjects?.map((subject, index) => {
    if (subject.department?.id !== filter && filter) return null;
    return (
      <tr className="text-sm h-8" key={index}>
        <td className="text-center">{index + 1}</td>
        <td>{subject.name}</td>
        <td>
          {subject.department?.name}
        </td>
        <td className="text-center">view</td>
        <td>
          <div className="text-center">
            <Button
              onClick={() => {
                setShowUpdateModal(true);
                updatingSubject.current = subject;
                setName(subject.name);
                setCredit(subject.credit.toString());
                setDepartment(subject.departmentID);
              }}
              type={ButtonType.SECONDARY}
              className="text-sm w-20"
            >
              แก้ไข
            </Button>
            <Button
              onClick={() => handleDeleteSubject(subject.id)}
              type={ButtonType.WARNING}
              className="text-sm w-20"
            >
              ลบ
            </Button>
          </div>
        </td>
      </tr>
    );
  });

  const modalFields = [
    {
      label: "ชื่อวิชา",
      fields: (
        <TextField type={TextFieldType.text} value={name} onChange={setName}>
          Competitive Programming
        </TextField>
      ),
    },
    {
      label: "หน่วยกิต",
      fields: (
        <TextField type={TextFieldType.number} value={credit} onChange={setCredit}>
          3
        </TextField>
      ),
    },
    {
      label: "ภาควิชา",
      fields: (
        <Dropdown
          onChange={setDepartment}
          list={departments as DepartmentType[]}
          value={department}
          name="department"
          className="h-10 text-xs"
        ></Dropdown>
      )
    }
  ];

  return (
    <div className="size-full flex flex-col items-center">
      {showCreateModal && (
        <InputModal // Create Faculty Modal
          fieldList={modalFields}
          onCancle={() => setShowCreateModal(false)}
          onConfirm={handleCreateSubject}
          confirmButtonType={ButtonType.SECONDARY}
          confirmButtonLabel="เพิ่มวิชา"
          className="w-96"
        >
          เพิ่มวิชา
        </InputModal>
      )}
      {showUpdateModal && (
        <InputModal // Update Faculty Modal
          fieldList={modalFields}
          onCancle={() => setShowUpdateModal(false)}
          onConfirm={handleUpdateSubject}
          confirmButtonType={ButtonType.SECONDARY}
          confirmButtonLabel="แก้ไขวิชา"
          className="w-96"
        >
          แก้ไขข้อมูลวิชา {updatingSubject.current?.name}
        </InputModal>
      )}
      <div className="w-11/12 h-20 flex flex-row items-center pl-10">
        <span className="text-xl w-80 font-bold">Manage My Subject</span>
        <div className="flex flex-col h-full flex-1 pr-2 justify-end items-end">
          <div className="h-full flex-1 flex flex-row justify-end items-end gap-1">
            <Button
              onClick={() => dispatch(fetchSubjects())}
              type={ButtonType.TERTIARY}
              className="h-6 w-6 mb-1 px-0"
            >
              <TbRefresh className="m-auto" />
            </Button>
            <Dropdown
              onChange={(value) => {
                navigate(`${AdminRoutePath.SUBJECT}/${value}`);
              }}
              list={departments as DepartmentType[]}
              value={filter}
              name="faculty"
              className="w-80 h-6 text-xs mb-1"
            ></Dropdown>
            <Button
              onClick={() => {
                setShowCreateModal(true)
                setDepartment(filter? filter : "")
              }}
              type={ButtonType.TERTIARY}
              className="text-xs h-6 w-16 mb-1"
            >
              เพิ่มวิชา
            </Button>
          </div>
          <span className="h-4 text-right text-xs text-red-500 mr-1 mb-1">
            {subjectsErrorMessage}
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

export default ManageSubject;
