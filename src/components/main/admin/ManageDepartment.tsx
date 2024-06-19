import { useEffect, useRef, useState } from "react";
import Table from "../../Table";
import Button from "../../Button";
import { ButtonType } from "../../../types/ButtonType";
import TextField from "../../TextField";
import { TextFieldType } from "../../../types/TextFieldType";
import Dropdown from "../../Dropdown";
import InputModal from "../../InputModal";
import { TbRefresh } from "react-icons/tb";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { addDepartment, fetchDepartments, putDepartment, removeDepartment } from "../../../store/thunks/departmentsThunk";
import { fetchFaculties } from "../../../store/thunks/facultiesThunk";
import { DepartmentType, FacultyType } from "../../../types/DatabaseType";
import { useNavigate, useParams } from "react-router-dom";

function ManageDepartment() {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const departments = useAppSelector(state => state.departments.data);
  const faculties = useAppSelector(state => state.faculties.data);

  const departmentErrorMessage = useAppSelector(state => state.departments.error);
  const facultyErrorMessage = useAppSelector(state => state.faculties.error);
  const errorMessage = departmentErrorMessage || facultyErrorMessage;

  const { filter } = useParams();

  const updatingDepartment = useRef<DepartmentType>();

  const [name, setName] = useState("");
  const [faculty, setFaculty] = useState("");

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  useEffect(() => { //initial fetch
    if (!departments) { //Only fetch if not already fetched
      dispatch(fetchDepartments());
    }
    if (!faculties) {
      dispatch(fetchFaculties());
    }
  }, [dispatch, departments, faculties])

  useEffect(() => { //On close modal reset input state
    if (showCreateModal || showUpdateModal) return;
    setName("");
    setFaculty("");
  }, [showCreateModal, showUpdateModal])

  const handleCreateDepartment = async () => {
    if (!confirm("Are you sure you want to create this department?")) return;
    await dispatch(addDepartment({
      name: name,
      facultyID: faculty,
    }));

    setShowCreateModal(false);
  }

  const handleUpdateDepartment = async () => {
    if (!confirm("Are you sure you want to update this department?")) return;
    await dispatch(putDepartment({
      id: updatingDepartment.current?.id as string,
      name: name,
      facultyID: faculty,
    }));

    setShowUpdateModal(false);
  }

  const handleDeleteDepartment = async (id: string) => {
    if (!confirm("Are you sure you want to delete this department?")) return;
    await dispatch(removeDepartment(id));
  }

  const header = (
    <tr>
      <th style={{ width: "2%" }}>no.</th>
      <th style={{ width: "50%" }}>name</th>
      <th style={{ width: "26%" }}>faculty</th>
      <th style={{ width: "7%" }}>teacher</th>
      <th style={{ width: "15%" }}>action</th>
    </tr>
  );

  const body = departments?.map((department, index) => {
    if (department.faculty?.id !== filter && filter) return null;
    return (
      <tr className="text-sm h-8" key={index}>
        <td className="text-center">{index + 1}</td>
        <td>{department.name}</td>
        <td>{department.faculty?.name}</td>
        <td className="text-center">View</td>
        <td>
          <div className="text-center">
            <Button
              onClick={() => {
                setShowUpdateModal(true);
                updatingDepartment.current = department;
                setFaculty(department.faculty?.id as string);
                setName(department.name);
              }}
              type={ButtonType.SECONDARY}
              className="text-sm w-20"
            >
              Edit
            </Button>
            <Button
              onClick={() => handleDeleteDepartment(department.id)}
              type={ButtonType.WARNING}
              className="text-sm w-20"
            >
              Delete
            </Button>
          </div>
        </td>
      </tr>
    );
  });

  const modalFields = [
    {
      label: "ชื่อสาขา",
      fields: (
        <TextField type={TextFieldType.text} value={name} onChange={setName}>
          Department of something
        </TextField>
      ),
    },
    {
      label: "คณะ",
      fields: (
        <Dropdown
          onChange={setFaculty}
          list={faculties as FacultyType[]}
          value={faculty}
          name="faculty"
          className="h-10 text-xs"
        ></Dropdown>
      ),
    },
  ];

  return (
    <div className="size-full flex flex-col items-center">
      {showCreateModal && (
        <InputModal //Create Department Modal
          fieldList={modalFields}
          onCancle={() => setShowCreateModal(false)}
          onConfirm={handleCreateDepartment}
          confirmButtonType={ButtonType.SECONDARY}
          confirmButtonLabel="เพิ่มสาขา"
        >
          เพิ่มสาขา
        </InputModal>
      )}
      {showUpdateModal && (
        <InputModal //Update Department Modal
          fieldList={modalFields}
          onCancle={() => setShowUpdateModal(false)}
          onConfirm={handleUpdateDepartment}
          confirmButtonType={ButtonType.SECONDARY}
          confirmButtonLabel="แก้สาขา"
        >
          แก้ไขสาขา {updatingDepartment.current?.name}
        </InputModal>
      )}
      <div className="w-11/12 h-20 flex flex-row items-center pl-10">
        <span className="text-xl w-80 font-bold">Manage Departments</span>
        <div className="flex flex-col h-full flex-1 pr-2 justify-end items-end">
          <div className="h-full flex-1 flex flex-row justify-end items-end gap-1">
            <Button
              onClick={() => dispatch(fetchDepartments())}
              type={ButtonType.TERTIARY}
              className="h-6 w-6 mb-1 px-0"
            >
              <TbRefresh className="m-auto" />
            </Button>
            <Dropdown
              onChange={(value) => {
                navigate(`/std/admin/department/${value}`);
              }}
              list={faculties as FacultyType[]}
              value={filter}
              name="faculty"
              className="w-40 h-6 text-xs mb-1"
            ></Dropdown>
            <Button
              onClick={() => setShowCreateModal(true)}
              type={ButtonType.TERTIARY}
              className="text-xs h-6 w-16 mb-1"
            >
              เพิ่มสาขา
            </Button>
          </div>
          <span className="h-4 text-right text-xs text-red-500 mr-1 mb-1">
            {errorMessage}
          </span>
        </div>
      </div>
      <div className="w-11/12 flex-1 flex flex-col justify-start">
        <div className="w-full bg-gray-100">
          <Table header={header} body={body as JSX.Element[]} className="min-w-150" />
        </div>
      </div>
    </div>
  );
}

export default ManageDepartment;
