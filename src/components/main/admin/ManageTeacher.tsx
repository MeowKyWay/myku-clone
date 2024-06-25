import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { addTeacher, fetchTeachers } from "../../../store/thunks/teachersThunk";
import InputModal from "../../InputModal";
import { ButtonType } from "../../../types/ButtonType";
import Button from "../../Button";
import { TbRefresh } from "react-icons/tb";
import Table from "../../Table";
import TextField from "../../TextField";
import { TextFieldType } from "../../../types/TextFieldType";
import Dropdown from "../../Dropdown";
import { fetchDepartments } from "../../../store/thunks/departmentsThunk";
import { DepartmentType } from "../../../types/DatabaseType";

function ManageTeacher() {

  const dispatch = useAppDispatch();

  const teachers = useAppSelector(state => state.teachers.data);
  const departments = useAppSelector(state => state.departments.data);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');

  const errorMessage = useAppSelector(state => state.teachers.error);

  const [showCreateModal, setShowCreateModal] = useState(false);

  useEffect(() => { // initial fetch
    if (!teachers && errorMessage === "") {
      dispatch(fetchTeachers());
    }
    if (!departments) {
      dispatch(fetchDepartments());
    }
  })

  useEffect(() => { // on close modal reset input state
    if (showCreateModal) return;
    setName("");
    setEmail("");
    setDepartment("");
  }, [showCreateModal])

  const handleCreateTeacher = async () => {
    if (!confirm("Are you sure you want to create this account?")) return;
    await dispatch(addTeacher({
      name: name,
      email: email,
      departmentID: department,
    }));

    setShowCreateModal(false);
  };

  const header = (
    <tr>
      <th style={{ width: "2%" }}>no.</th>
      <th style={{ width: "35%" }}>name</th>
      <th style={{ width: "20%" }}>email</th>
      <th style={{ width: "25%" }}>department</th>
      <th style={{ width: "8%" }}>subjects</th>
      <th style={{ width: "10%" }}>status</th>
    </tr>
  );

  const body = teachers?.map((teacher, index) => {
    return (
      <tr className="text-sm h-8" key={index}>
        <td className="text-center">{index + 1}</td>
        <td>{teacher.name}</td>
        <td>{teacher.email}</td>
        <td>
          {departments?.find(department => department.id === teacher.departmentID)?.name}
        </td>
        <td className="text-center">
          view
        </td>
        <td className="text-center">
          {teacher.userStatus}
        </td>
      </tr>
    );
  });

  const modalFields = [
    {
      label: "ชื่ออาจารย์",
      fields: (
        <TextField type={TextFieldType.text} value={name} onChange={setName}>
          Name of teacher
        </TextField>
      ),
    },
    {
      label: "อีเมล",
      fields: (
        <TextField type={TextFieldType.email} value={email} onChange={setEmail}>
          Email of teacher
        </TextField>
      ),
    },
    {
      label: "สาขา",
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
        <InputModal // Create Teacher Modal
          fieldList={modalFields}
          onCancle={() => setShowCreateModal(false)}
          onConfirm={handleCreateTeacher}
          confirmButtonType={ButtonType.SECONDARY}
          className="w-96"
          confirmButtonLabel="เพิ่ม"
        >
          เพิ่มอาจารย์
        </InputModal>
      )}
      <div className="w-11/12 h-20 flex flex-row items-center pl-10">
        <span className="text-xl w-80 font-bold">Manage Teacher</span>
        <div className="flex flex-col h-full flex-1 pr-2 justify-end items-end">
          <div className="h-full flex-1 flex flex-row justify-end items-end gap-1">
            <Button
              onClick={() => dispatch(fetchTeachers())}
              type={ButtonType.TERTIARY}
              className="h-6 w-6 mb-1 px-0"
            >
              <TbRefresh className="m-auto" />
            </Button>
            <Button
              onClick={() => setShowCreateModal(true)}
              type={ButtonType.TERTIARY}
              className="text-xs h-6 w-20 mb-1"
            >
              เพิ่มอาจารย์
            </Button>
          </div>
          <span className="h-4 text-right text-xs text-red-500 mr-1 mb-1">
            {errorMessage}
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

export default ManageTeacher;
