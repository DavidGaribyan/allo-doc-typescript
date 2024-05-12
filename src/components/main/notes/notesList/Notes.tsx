import "./notes.css";
import NotesCard from "../notesCard/NotesCard";
import { useEffect, useState } from "react";
import WrapperMain from "../../../wrapperMain/WrapperMain";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { doctorListSelector } from "../../../../store/selectors/doctorListSelector";
import { doctorListActions } from "../../../../store/actions";

interface NotesProps {
  show?: boolean;
}

const Notes: React.FC<NotesProps> = function ({ show }) {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [doctorsCategory, setDoctorsCategory] = useState<string>("1");
  const { loading, doctorList } = useSelector(doctorListSelector);

  useEffect(() => {
    dispatch(doctorListActions.get(doctorsCategory));
  }, [dispatch, doctorsCategory]);

  if (loading) {
    return <p>laoding...</p>;
  } else {
    return (
      <>
        <WrapperMain>
          {show && <p className="notes__heading">{t("doctorCards.myBooks")}</p>}
          <ul className="notes__list">
            <li
              onClick={() => setDoctorsCategory("1")}
              className={`notes__item  ${
                doctorsCategory === "1" ? "active__yellow" : ""
              }`}
            >
              {t("doctorCards.listItem_1")}
            </li>
            <li
              onClick={() => setDoctorsCategory("2")}
              className={`notes__item  ${
                doctorsCategory === "2" ? "active__green" : ""
              }`}
            >
              {t("doctorCards.listItem_2")}
            </li>
            <li
              onClick={() => setDoctorsCategory("4")}
              className={`notes__item  ${
                doctorsCategory === "3" ? "active__red" : ""
              }`}
            >
              {t("doctorCards.listItem_3")}
            </li>
          </ul>
          <NotesCard user={doctorList} />
        </WrapperMain>
      </>
    );
  }
};
export default Notes;
