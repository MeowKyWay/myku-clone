import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { fetchStudentSections } from "../../../store/thunks/studentSectionsThunk";

function EnrollResult() {

  const dispatch = useAppDispatch();

  const studentSections = useAppSelector((state) => state.studentSections.data);
  const studentSectionsErrorMessage = useAppSelector((state) => state.studentSections.error);

  useEffect(() => {
    if (!studentSections && studentSectionsErrorMessage === "") {
      dispatch(fetchStudentSections());
    }
  }, [studentSections, studentSectionsErrorMessage, dispatch]);

  const renderStudentSections = studentSections?.map((section) => (
    <div key={section.id}>
      <h1>{section.sectionID}</h1>
      <h2>{section.studentID}</h2>
    </div>
  ));

  return (
    <div>
      {renderStudentSections}
    </div>
  );
}

export default EnrollResult;