import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { fetchMyEnrollment } from "../../../store/thunks/studentEnrollmentsThunk";
import { fetchMySections } from "../../../store/thunks/studentSectionsThunk";
import Time from "../../../utility/Time";
import RadioButton from "../../RadioButton";
import EnrollList from "./EnrollList";
import Button from "../../Button";
import { ButtonType } from "../../../types/ButtonType";
import { TbRefresh } from "react-icons/tb";

function EnrollResult() {

  const dispatch = useAppDispatch();

  const enrollments = useAppSelector(state => state.user.currentUser.enrollments);
  const sections = useAppSelector(state => state.user.currentUser.sections);

  const enrollmentsErrorMessage = useAppSelector(state => state.user.enrollmentsError);
  const sectionsErrorMessage = useAppSelector(state => state.user.sectionsError);

  useEffect(() => {
    if (!enrollments && !enrollmentsErrorMessage)
      dispatch(fetchMyEnrollment())
    if (!sections && !sectionsErrorMessage)
      dispatch(fetchMySections())
  }, [dispatch, enrollments, sections, sectionsErrorMessage, enrollmentsErrorMessage]);

  const [radioSuccess, setRadioSuccess] = useState(false);
  const [radioPending, setRadioPending] = useState(false);
  const [radioReject, setRadioReject] = useState(false);
  const [radioAll, setRadioAll] = useState(true);

  useEffect(() => {
    if (!radioSuccess) return;
    setRadioPending(false);
    setRadioReject(false);
    setRadioAll(false);
  }, [radioSuccess]);
  useEffect(() => {
    if (!radioPending) return;
    setRadioSuccess(false);
    setRadioReject(false);
    setRadioAll(false);
  }, [radioPending]);
  useEffect(() => {
    if (!radioReject) return;
    setRadioSuccess(false);
    setRadioPending(false);
    setRadioAll(false);
  }, [radioReject]);
  useEffect(() => {
    if (!radioAll) return;
    setRadioSuccess(false);
    setRadioPending(false);
    setRadioReject(false);
  }, [radioAll]);

  return (
    <div className="py-6 size-main">
      <div className="flex flex-col size-full">
        <div className="flex flex-row h-21.5 w-full px-4">
          <div className="w-2/3 px-3 flex flex-col gap-2">
            <span className="font-medium text-2xl text-gray-600">ผลการลงทะเบียน</span>
            <span className="text-green font-light text-sm">{Time.dayOfWeek(Time.now()) + ", " + Time.dayOfLife(Time.now())}</span>
          </div>
          <div className="w-1/3 px-3">
          </div>
        </div>
        <div className="flex flex-col px-7 py-1">
          <div className="flex flex-row w-full py-4 gap-2 border-box border-t border-gray">
            <RadioButton label="สำเร็จ" value={radioSuccess} onClick={setRadioSuccess} activateColor="#07bc77" />
            <RadioButton label="รอพิจารณา" value={radioPending} onClick={setRadioPending} activateColor="#ffd951" />
            <RadioButton label="ไม่เห็นชอบ" value={radioReject} onClick={setRadioReject} activateColor="#d9534f" />
            <RadioButton label="ทั้งหมด" value={radioAll} onClick={setRadioAll} activateColor="#5ec1d4" />
            <Button type={ButtonType.TERTIARY} onClick={() => dispatch(fetchMyEnrollment())}>
              <TbRefresh className="m-auto" />
            </Button>
          </div>
          {(radioSuccess || radioAll) &&
            <EnrollList
              enrollments={enrollments?.filter(enrollment => enrollment.status === "Success") || []}
              label="รายวิชาที่ลงทะเบียนสำเร็จ">
            </EnrollList>
          }
          {(radioPending || radioAll) &&
            <EnrollList
              enrollments={enrollments?.filter(enrollment => enrollment.status === "Pending") || []}
              label="รายวิชาที่รอพิจารณา">
            </EnrollList>
          }
          {(radioReject || radioAll) &&
            <EnrollList
              enrollments={enrollments?.filter(enrollment => enrollment.status === "Reject") || []}
              label="รายวิชาที่ไม่เห็นชอบ">
            </EnrollList>
          }
        </div>
      </div>
    </div>
  );
}

export default EnrollResult;