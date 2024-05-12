import DoctorProfileBanner from "./doctorProfileBanner/DoctorProfileBanner";
import DoctorProfileInfo from "./doctorProfileInfo/DoctorProfileInfo";
import "./doctorProfile.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { doctorInfoPageSelector } from "../../store/selectors/doctorInfoPageSelector";
import { doctorInfoPageActions } from "../../store/actions";
export default function DoctorProfile() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { loading, data } = useSelector(doctorInfoPageSelector);

  useEffect(() => {
    dispatch(doctorInfoPageActions.get(id));
  }, [dispatch, id]);
  if (!data) {
    return null;
  }

  if (loading) {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  } else {
    return (
      <>
        <DoctorProfileBanner initial={data} />
        <DoctorProfileInfo initial={data} />
      </>
    );
  }
}
