import { useCallback, useEffect, useRef, useState } from "react";
import { generateClient } from "aws-amplify/api";
import { DepartmentType, FacultyType } from "../../../types/DatabaseType";
import Table from "../../Table";
import Button from "../../Button";
import { ButtonType } from "../../../types/ButtonType";
import Modal from "../../Modal";
import TextField from "../../TextField";
import { TextFieldType } from "../../../types/TextFieldType";
import {
  createDepartment,
  deleteDepartment,
  updateDepartment,
} from "../../../graphql/mutations";
import Dropdown from "../../Dropdown";
import { listFaculties } from "../../../graphql/queries";
import InputModal from "../../InputModal";
import { TbRefresh } from "react-icons/tb";
import { useNavigate, useParams } from "react-router-dom";
import { listDepartmentsWithFaculty } from "../../../custom_graphql/customQueries";

function ManageDepartment() {

  const client = useRef(generateClient({ authMode: "userPool" }));
  const navigate = useNavigate();

  const { filter } = useParams();

  const [name, setName] = useState("");
  const [faculty, setFaculty] = useState("");

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [updatingDepartment, setUpdatingDepartment] = useState<DepartmentType>(
    {} as DepartmentType
  );

  const [departments, setDepartments] = useState<DepartmentType[]>([]);
  const [faculties, setFaculties] = useState<FacultyType[]>([]);

  const fetchDepartments = useCallback(async () => {
    //fetch faculty from db
    try {
      const fetch = await client.current.graphql({
        query: listDepartmentsWithFaculty,
        variables: {
          filter: {
            facultyID: {
              eq: filter,
            },
          },
        },
      });
      setDepartments(fetch.data.listDepartments.items as never[]);
    } catch (error: unknown) {
      console.log(error);
    }
  }, [filter]);

  const fetchFaculties = async () => {
    try {
      const fetch = await client.current.graphql({
        query: listFaculties,
      });

      setFaculties(fetch.data.listFaculties.items as never[]);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  const handleCreateDepartment = async () => {
    try {
      console.log(faculty);
      await client.current.graphql({
        query: createDepartment,
        variables: {
          input: {
            name: name,
            facultyID: faculty,
          },
        },
      });
      await fetchDepartments();
      setErrorMessage("");
    } catch (error: unknown) {
      console.log(error);
      if (error instanceof Error) {
        setErrorMessage(error.message);
      }
    }
    setName("");
    setFaculty("");
    setShowCreateModal(false);
  };

  const handleDeleteDepartment = async (id: string) => {
    if (!confirm("Are you sure you want to delete this department?")) {
      return;
    }
    try {
      await client.current.graphql({
        query: deleteDepartment,
        variables: {
          input: {
            id: id,
          },
        },
      });
      await fetchDepartments();
      setErrorMessage("");
    } catch (error: unknown) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      }
    }
  };

  const handleUpdateDepartment = async () => {
    try {
      await client.current.graphql({
        query: updateDepartment,
        variables: {
          input: {
            id: updatingDepartment.id,
            name: name,
            facultyID: faculty,
          },
        },
      });
      await fetchDepartments();
      setErrorMessage("");
    } catch (error: unknown) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      }
    }
    setName("");
    setFaculty("");
    setShowUpdateModal(false);
  };

  useEffect(() => {
    fetchDepartments();
  }, [fetchDepartments]);

  useEffect(() => {
    fetchFaculties();
  }, []);

  const header = (
    <tr>
      <th style={{ width: "2%" }}>no.</th>
      <th style={{ width: "27%" }}>id</th>
      <th style={{ width: "30%" }}>name</th>
      <th style={{ width: "19%" }}>faculty</th>
      <th style={{ width: "7%" }}>teacher</th>
      <th style={{ width: "15%" }}>action</th>
    </tr>
  );

  const body = departments.map((department, index) => {
    return (
      <tr className="text-sm h-8" key={index}>
        <td className="text-center">{index + 1}</td>
        <td className="mono">{department.id}</td>
        <td>{department.name}</td>
        <td>{department.faculty?.name}</td>
        <td className="text-center">View</td>
        <td>
          <div className="text-center">
            <Button
              onClick={() => {
                setShowUpdateModal(true);
                setUpdatingDepartment(department);
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
          list={faculties}
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
        <InputModal
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
        <Modal>
          <InputModal
            fieldList={modalFields}
            onCancle={() => setShowUpdateModal(false)}
            onConfirm={handleUpdateDepartment}
            confirmButtonType={ButtonType.SECONDARY}
            confirmButtonLabel="แก้สาขา"
          >
            แก้ไขสาขา {updatingDepartment.name}
          </InputModal>
        </Modal>
      )}
      <div className="w-11/12 h-20 flex flex-row items-center pl-10">
        <span className="text-xl w-80 font-bold">Manage Departments</span>
        <div className="flex flex-col h-full flex-1 pr-2 justify-end items-end">
          <div className="h-full flex-1 flex flex-row justify-end items-end gap-1">
            <Button
              onClick={fetchDepartments}
              type={ButtonType.TERTIARY}
              className="h-6 w-6 mb-1 px-0"
            >
              <TbRefresh className="m-auto" />
            </Button>
            <Dropdown
              onChange={(value) => {
                navigate(`/std/admin/department/${value}`);
              }}
              list={faculties}
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
          <Table header={header} body={body} className="min-w-150" />
        </div>
      </div>
    </div>
  );
}

export default ManageDepartment;
