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
import { DepartmentType, SectionType, SubjectType } from "../../../types/DatabaseType";
import { useNavigate, useParams } from "react-router-dom";
import { addSection, fetchSections, putSection, removeSection } from "../../../store/thunks/sectionsThunk";
import { fetchSubjects } from "../../../store/thunks/subjectsThunk";
import { TeacherRoutePath } from "../../../route/RoutePath";
import { fetchDepartments } from "../../../store/thunks/departmentsThunk";
import { addSectionEligibleDepartment, removeSectionEligibleDepartment } from "../../../store/thunks/sectionEligibleDepartmentThunk";

function Section() {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const sections = useAppSelector(state => state.sections.data);
  const subjects = useAppSelector(state => state.subjects.data);
  const departments = useAppSelector(state => state.departments.data);

  const user = useAppSelector(state => state.user.currentUser)

  const sectionErrorMessage = useAppSelector(state => state.sections.error);
  const subjectErrorMessage = useAppSelector(state => state.subjects.error);
  const departmentErrorMessage = useAppSelector(state => state.departments.error);
  const errorMessage = sectionErrorMessage || subjectErrorMessage || departmentErrorMessage;

  const { filter } = useParams();

  const updatingSection = useRef<SectionType>();

  const [name, setName] = useState("");
  const [capacity, setCapacity] = useState("");
  const [subject, setSubject] = useState("");

  const [department, setDepartment] = useState("");

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showCreateEligibleDepartmentModal, setShowCreateEligibleDepartmentModal] = useState(false);

  useEffect(() => { //initial fetch
    if (!sections) { //Only fetch if not already fetched
      dispatch(fetchSections());
    }
    if (!subjects) {
      dispatch(fetchSubjects());
    }
    if (!departments) {
      dispatch(fetchDepartments());
    }
  }, [dispatch, sections, subjects, departments])

  useEffect(() => { //On close modal reset input state
    if (showCreateModal || showUpdateModal) return;
    setName("");
    setCapacity("");
    setSubject("");
  }, [showCreateModal, showUpdateModal])

  useEffect(() => { //On close modal reset input state
    if (showCreateEligibleDepartmentModal) return;
    setDepartment("");
  }, [showCreateEligibleDepartmentModal])

  const handleCreateSection = async () => {
    if (!confirm("Are you sure you want to create this section?")) return;
    await dispatch(addSection({
      name: name,
      capacity: Number(capacity),
      teacher: user.attributes.name as string,
      subjectID: subject,
    }));

    setShowCreateModal(false);
  }

  const handleUpdateSection = async () => {
    if (!confirm("Are you sure you want to update this section?")) return;
    await dispatch(putSection({
      id: updatingSection.current?.id as string,
      name: name,
      capacity: Number(capacity),
    }));

    setShowUpdateModal(false);
  }

  const handleDeleteSection = async (id: string) => {
    if (!confirm("Are you sure you want to delete this section?")) return;
    await dispatch(removeSection(id));
  }

  const handleCreateSectionEligibleDepartment = async () => {
    if (!confirm("Are you sure you want to add this eligible department?")) return;
    await dispatch(addSectionEligibleDepartment({
      sectionID: updatingSection.current?.id as string,
      departmentID: department,
    }));

    setShowCreateEligibleDepartmentModal(false);
  }

  const handleDeleteSectionEligibleDepartment = async (id: string) => {
    if (!confirm("Are you sure you want to delete this eligible department?")) return;
    await dispatch(removeSectionEligibleDepartment(id));
  }

  const filterDepartment = () => {
    return departments?.filter(
      department => !(updatingSection.current?.eligibleDepartments?.items.map(item => item.departmentID).includes(department.id))
    );
  }

  const header = (
    <tr>
      <th style={{ width: "2%" }}>no.</th>
      <th style={{ width: "26%" }}>subject</th>
      <th style={{ width: "5%" }}>section</th>
      <th style={{ width: "31%" }}>eligible departments</th>
      <th style={{ width: "7%" }}>capacity</th>
      <th style={{ width: "7%" }}>student</th>
      <th style={{ width: "7%" }}>schedue</th>
      <th style={{ width: "15%" }}>action</th>
    </tr>
  );

  const body = sections?.map((section, index) => {
    if (section.subject?.id !== filter && filter) return null;
    return (
      <tr className="text-sm h-8" key={index}>
        <td className="text-center">{index + 1}</td>
        <td>{section.subject?.name}</td>
        <td className="text-center">{section.name}</td>
        <td className="text-center pt-1"> {/* List eligible department */}
          {
            (section.eligibleDepartments) &&
            section.eligibleDepartments?.items.map((eligibleDepartment, index) => {
              return (
                <div className="flex flex-row mb-1" key={eligibleDepartment.id}>
                  <span key={index} className="text-xs mr-auto">{eligibleDepartment.department?.name}</span>
                  <Button onClick={() => {
                    handleDeleteSectionEligibleDepartment(eligibleDepartment.id);
                  }}
                    type={ButtonType.WARNING}
                    className="w-20 mr-1"
                  >Delete</Button>
                </div>
              );
            })
          }
          <Button onClick={() => {
            setShowCreateEligibleDepartmentModal(true);
            updatingSection.current = section;
          }}
            type={ButtonType.PRIMARY}
            className="w-40 m-auto mb-1"
          >Add</Button>
        </td>
        <td className="text-center">{section.capacity}</td>
        <td className="text-center">View</td>
        <td className="text-center">View</td>
        <td>
          <div className="text-center">
            <Button
              onClick={() => {
                setShowUpdateModal(true);
                updatingSection.current = section;
                setSubject(section.subject?.id as string);
                setName(section.name);
              }}
              type={ButtonType.SECONDARY}
              className="text-sm w-20"
            >
              Edit
            </Button>
            <Button
              onClick={() => handleDeleteSection(section.id)}
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

  const sectionModalFields = [
    {
      label: "หมู่เรียนที่",
      fields: (
        <TextField type={TextFieldType.text} value={name} onChange={setName}>
          example 1
        </TextField>
      ),
    },
    {
      label: "ความจุนักศึกษา",
      fields: (
        <TextField type={TextFieldType.number} value={capacity} onChange={setCapacity}>
          50
        </TextField>
      ),
    },
    {
      label: "วิชา",
      fields: (
        <Dropdown
          onChange={setSubject}
          list={subjects as SubjectType[]}
          value={subject}
          name="subject"
          className="h-10 text-xs"
        ></Dropdown>
      ),
    },
  ];

  const eligibleDepartmentModalFields = [
    {
      label: "ภาควิชา",
      fields: (
        <Dropdown
          onChange={setDepartment}
          list={filterDepartment() as DepartmentType[]}
          value={department}
          name="department"
          className="h-10 text-xs"
        ></Dropdown>
      ),
    },
  ];

  return (
    <div className="size-full flex flex-col items-center">
      {showCreateModal && (
        <InputModal //Create Department Modal
          fieldList={sectionModalFields}
          onCancle={() => setShowCreateModal(false)}
          onConfirm={handleCreateSection}
          confirmButtonType={ButtonType.SECONDARY}
          confirmButtonLabel="เพิ่มหมู่เรียน"
          className="w-80"
        >
          เพิ่มสาขา
        </InputModal>
      )}
      {showUpdateModal && (
        <InputModal //Update Department Modal
          fieldList={sectionModalFields}
          onCancle={() => setShowUpdateModal(false)}
          onConfirm={handleUpdateSection}
          confirmButtonType={ButtonType.SECONDARY}
          confirmButtonLabel="แก้หมู่เรียน"
          className="w-80"
        >
          แก้ไขสาขา {updatingSection.current?.name}
        </InputModal>
      )}
      {showCreateEligibleDepartmentModal && (
        <InputModal //Create Department Modal
          fieldList={eligibleDepartmentModalFields}
          onCancle={() => setShowCreateEligibleDepartmentModal(false)}
          onConfirm={handleCreateSectionEligibleDepartment}
          confirmButtonType={ButtonType.SECONDARY}
          confirmButtonLabel="เพิ่มหมู่เรียน"
          className="w-80"
        >
          เพิ่มสาขา
        </InputModal>
      )}
      <div className="w-11/12 h-20 flex flex-row items-center pl-10">
        <span className="text-xl w-80 font-bold">Manage Sections</span>
        <div className="flex flex-col h-full flex-1 pr-2 justify-end items-end">
          <div className="h-full flex-1 flex flex-row justify-end items-end gap-1">
            <Button
              onClick={() => dispatch(fetchSections())}
              type={ButtonType.TERTIARY}
              className="h-6 w-6 mb-1 px-0"
            >
              <TbRefresh className="m-auto" />
            </Button>
            <Dropdown
              onChange={(value) => {
                navigate(`${TeacherRoutePath.SECTION}/${value}`);
              }}
              list={subjects as SubjectType[]}
              value={filter}
              name="subject"
              className="w-60 h-6 text-xs mb-1"
            ></Dropdown>
            <Button
              onClick={() => {
                setSubject(filter ? filter : "");
                setShowCreateModal(true)
              }}
              type={ButtonType.TERTIARY}
              className="text-xs h-6 w-18 mb-1"
            >
              เพิ่มหมู่เรียน
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

export default Section;
