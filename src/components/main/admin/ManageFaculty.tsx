import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { FacultyType } from "../../../types/DatabaseType";
import Table from "../../Table";
import Button from "../../Button";
import { ButtonType } from "../../../types/ButtonType";
import TextField from "../../TextField";
import { TextFieldType } from "../../../types/TextFieldType";
import InputModal from "../../InputModal";
import { TbRefresh } from "react-icons/tb";
import ClickableText from "../../ClickableText";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { addFaculty, fetchFaculties, putFaculty, removeFaculty } from "../../../store/thunks/facultiesThunk";

function ManageFaculty() {

  const location = useLocation();
  const dispatch = useAppDispatch();

  if (location.pathname !== "/std/admin/faculty") {//in case of /std/admin/ (default path)
    window.history.pushState({}, "", "/std/admin/faculty");
  }

  const faculties = useAppSelector(state => state.faculties.data);

  const updatingFaculty = useRef<FacultyType>();

  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  useEffect(() => { // initial fetch
    if (!faculties) {
      dispatch(fetchFaculties());
    }
  })

  useEffect(() => { // on close modal reset input state
    if (showCreateModal || showUpdateModal) return;
    setName("");
  }, [showCreateModal, showUpdateModal])

  const handleCreateFaculty = async () => {
    if (!confirm("Are you sure you want to create this faculty?")) return;
    try {
      await dispatch(addFaculty({
        name: name
      }))
    } catch (error) {
      setErrorMessage((error as Error).message);
    }

    setShowCreateModal(false);
  };

  const handleUpdateFaculty = async () => {
    if (!confirm("Are you sure you want to update this faculty?")) return;
    try {
      await dispatch(putFaculty({
        id: updatingFaculty.current?.id as string,
        name: name
      }))
    } catch (error) {
      setErrorMessage((error as Error).message);
    }

    setShowUpdateModal(false);
  };

  const handleDeleteFaculty = async (id: string) => {
    if (!confirm("Are you sure you want to delete this faculty?")) {
      return;
    }
    try {
      await dispatch(removeFaculty(id));
    } catch (error) {
      setErrorMessage((error as Error).message);
    }
  };

  const header = (
    <tr>
      <th style={{ width: "2%" }}>no.</th>
      <th style={{ width: "27%" }}>id</th>
      <th style={{ width: "46%" }}>name</th>
      <th style={{ width: "10%" }}>departments</th>
      <th style={{ width: "15%" }}>action</th>
    </tr>
  );

  const body = faculties?.map((faculty, index) => {
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
                updatingFaculty.current = faculty;
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
        <InputModal // Create Faculty Modal
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
        <InputModal // Update Faculty Modal
          fieldList={modalFields}
          onCancle={() => setShowUpdateModal(false)}
          onConfirm={handleUpdateFaculty}
          confirmButtonType={ButtonType.SECONDARY}
          confirmButtonLabel="แก้ไขคณะ"
        >
          แก้ไขข้อมูลคณะ {updatingFaculty.current?.name}
        </InputModal>
      )}
      <div className="w-11/12 h-20 flex flex-row items-center pl-10">
        <span className="text-xl w-80 font-bold">Manage Faculties</span>
        <div className="flex flex-col h-full flex-1 pr-2 justify-end items-end">
          <div className="h-full flex-1 flex flex-row justify-end items-end gap-1">
            <Button
              onClick={() => dispatch(fetchFaculties())}
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
          <Table header={header} body={body as JSX.Element[]} className="min-w-150" />
        </div>
      </div>
    </div>
  );
}

export default ManageFaculty;
