import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { generateClient } from "aws-amplify/api";
import { listFaculties } from "../../../graphql/queries";
import { FacultyType } from "../../../types/DatabaseType";
import Table from "../../Table";
import Button from "../../Button";
import { ButtonType } from "../../../types/ButtonType";
import TextField from "../../TextField";
import { TextFieldType } from "../../../types/TextFieldType";
import {
  createFaculty,
  deleteFaculty,
  updateFaculty,
} from "../../../graphql/mutations";
import InputModal from "../../InputModal";
import { TbRefresh } from "react-icons/tb";
import ClickableText from "../../ClickableText";

function ManageFaculty() {
  const location = useLocation();

  const [name, setName] = useState("");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [updatingFaculty, setUpdatingFaculty] = useState<FacultyType>(
    {} as FacultyType
  );

  if (location.pathname !== "/std/admin/faculty") {
    window.history.pushState({}, "", "/std/admin/faculty");
  }

  const client = useRef(generateClient());
  const [faculties, setFaculties] = useState<FacultyType[]>([]);

  const fetch = async () => {
    //fecth faculty from db
    const fetchFaculties = await client.current.graphql({
      query: listFaculties,
    });

    setFaculties(fetchFaculties.data.listFaculties.items as never[]);
  };

  const handleCreateFaculty = async () => {
    try {
      await client.current.graphql({
        query: createFaculty,
        variables: {
          input: {
            name: name,
          },
        },
      });
      await fetch();
      setErrorMessage("");
    } catch (error: unknown) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      }
    }
    setName("");
    setShowCreateModal(false);
  };

  const handleDeleteFaculty = async (id: string) => {
    if (!confirm("Are you sure you want to delete this faculty?")) {
      return;
    }
    try {
      await client.current.graphql({
        query: deleteFaculty,
        variables: {
          input: {
            id: id,
          },
        },
      });
      await fetch();
      setErrorMessage("");
    } catch (error: unknown) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      }
    }
  };

  const handleUpdateFaculty = async () => {
    try {
      await client.current.graphql({
        query: updateFaculty,
        variables: {
          input: {
            id: updatingFaculty.id,
            name: name,
          },
        },
      });
      await fetch();
      setErrorMessage("");
    } catch (error: unknown) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      }
    }
    setName("");
    setShowUpdateModal(false);
  };

  useEffect(() => {
    fetch();
  }, []);

  const header = (
    <tr>
      <th style={{ width: "2%" }}>no.</th>
      <th style={{ width: "27%" }}>id</th>
      <th style={{ width: "46%" }}>name</th>
      <th style={{ width: "10%" }}>departments</th>
      <th style={{ width: "15%" }}>action</th>
    </tr>
  );

  const body = faculties.map((faculty, index) => {
    return (
      <tr className="text-sm h-8" key={index}>
        <td className="text-center">{index + 1}</td>
        <td className="mono">{faculty.id}</td>
        <td>{faculty.name}</td>
        <td className="text-center">
          <Link to={`/std/admin/department/${faculty.id}`}>
            <ClickableText>View</ClickableText>
          </Link>
        </td>
        <td>
          <div className="text-center">
            <Button
              onClick={() => {
                setShowUpdateModal(true);
                setUpdatingFaculty(faculty);
                setName(faculty.name);
              }}
              type={ButtonType.SECONDARY}
              className="text-sm w-20"
            >
              แก้ไข
            </Button>
            <Button
              onClick={() => handleDeleteFaculty(faculty.id)}
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
      label: "ชื่อคณะ",
      fields: (
        <TextField type={TextFieldType.text} value={name} onChange={setName}>
          Faculty of something
        </TextField>
      ),
    },
  ];

  return (
    <div className="size-full flex flex-col items-center">
      {showCreateModal && (
        <InputModal
          fieldList={modalFields}
          onCancle={() => setShowCreateModal(false)}
          onConfirm={handleCreateFaculty}
          confirmButtonType={ButtonType.SECONDARY}
          confirmButtonLabel="เพิ่มคณะ"
        >
          เพิ่มคณะ
        </InputModal>
      )}
      {showUpdateModal && (
        <InputModal
          fieldList={modalFields}
          onCancle={() => setShowUpdateModal(false)}
          onConfirm={handleUpdateFaculty}
          confirmButtonType={ButtonType.SECONDARY}
          confirmButtonLabel="แก้ไขคณะ"
        >
          แก้ไขข้อมูลคณะ {updatingFaculty.name}
        </InputModal>
      )}
      <div className="w-11/12 h-20 flex flex-row items-center pl-10">
        <span className="text-xl w-80 font-bold">Manage Faculties</span>
        <div className="flex flex-col h-full flex-1 pr-2 justify-end items-end">
          <div className="h-full flex-1 flex flex-row justify-end items-end gap-1">
            <Button
              onClick={fetch}
              type={ButtonType.TERTIARY}
              className="h-6 w-6 mb-1 px-0"
            >
              <TbRefresh className="m-auto" />
            </Button>
            <Button
              onClick={() => setShowCreateModal(true)}
              type={ButtonType.TERTIARY}
              className="text-xs h-6 w-16 mb-1"
            >
              เพิ่มคณะ
            </Button>
          </div>
          <span className="h-4 text-right text-xs text-red-500 mr-1 mb-1">
            {errorMessage}
          </span>
        </div>
      </div>
      <div className="w-11/12 flex-1 flex flex-col justify-start">
        <div className="w-full bg-gray-100 overflow-hidden">
          <Table header={header} body={body} className="min-w-150" />
        </div>
      </div>
    </div>
  );
}

export default ManageFaculty;
