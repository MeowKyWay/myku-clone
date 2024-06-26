import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { fetchStudentSections } from "../../../store/thunks/studentSectionsThunk";

function EnrollResult() {

  const dispatch = useAppDispatch();

  const studentSections = useAppSelector((state) => state.user.sections);
  const studentSectionsErrorMessage = useAppSelector((state) => state.user.error);

  useEffect(() => {
    if (!studentSections && studentSectionsErrorMessage === "") {
      dispatch(fetchStudentSections());
    }
  }, [studentSections, studentSectionsErrorMessage, dispatch]);

  const renderStudentSections = studentSections?.map((section) => (
    <div key={section.id}>
      <h1>{section.sectionID}</h1>
    </div>
  ));

  return (
    <div>
      {renderStudentSections}
    </div>
  );
}

export default EnrollResult;