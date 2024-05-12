import "./doctorProfileInfo.css";

import WrapperMain from "../../../components/wrapperMain/WrapperMain";
import infoPageCalendar from "./doctorProfileInfoIcons/infoPage-calendar.png";
import infoPageEducation from "./doctorProfileInfoIcons/infoPage-education.png";
import infoPageMore from "./doctorProfileInfoIcons/infoPage-more.png";
import infoPagePlus from "./doctorProfileInfoIcons/infoPage-plus.png";
import { useTranslation } from "react-i18next";

interface DoctorProfileInfoProps {
  initial: {
    near_date: string;
    city: string;
    address: string;
    date_of_birth: string;
    phone_number: string;
    doctor_details: DoctorDetails;
    user_categories: Categories[];
  };
}

interface DoctorDetails {
  education: string;
}
interface Categories {
  id: number;
  category: Category;
}
interface Category {
  title: Title;
  description: Description;
}
interface Description {
  ru: string;
  ro: string;
}
interface Title {
  ru: string;
  ro: string;
}

const DoctorProfileInfo: React.FC<DoctorProfileInfoProps> = function ({
  initial,
}) {
  const doctorUserData = initial;
  const { t } = useTranslation();

  const setToHtml = (text: string): { __html: string } => {
    return { __html: text };
  };

  return (
    <>
      <WrapperMain>
        <div className="doctorProfileInfo__wrapper">
          <ul className="doctorProfileInfo__list">
            <li>
              <p className="doctorProfileInfo__list-heading">
                <img
                  src={infoPageCalendar}
                  alt="icon"
                  className="infoPage__calendar"
                />
                {t("doctorUserPage.doctorUserPageCalendarHeading")}
              </p>
              <p>{doctorUserData.near_date}</p>
            </li>
            <li>
              <p className="doctorProfileInfo__list-heading">
                <img
                  src={infoPageEducation}
                  alt="icon"
                  className="infoPage__calendar"
                />
                {t("doctorUserPage.doctorUserPageEducationHeading")}
              </p>
              <p
                className="doctorProfileInfo__list-text"
                dangerouslySetInnerHTML={setToHtml(
                  doctorUserData.doctor_details.education
                )}
              ></p>
            </li>
            <li>
              <p className="doctorProfileInfo__list-heading">
                <img
                  src={infoPagePlus}
                  alt="icon"
                  className="infoPage__calendar"
                />
                {t("doctorUserPage.doctorUserPageSpeacalizationHeading")}
              </p>
              <p>
                {doctorUserData.user_categories[0].category.description.ru}{" "}
              </p>
            </li>
            <li>
              <p className="doctorProfileInfo__list-heading">
                <img
                  src={infoPageMore}
                  alt="icon"
                  className="infoPage__calendar"
                />
                {t("doctorUserPage.doctorUserPageMoreHeading")}
              </p>
              <p className="doctorProfileInfo__list-text">
                city: {doctorUserData.city}{" "}
              </p>
              <p className="doctorProfileInfo__list-text">
                adress: {doctorUserData.address}{" "}
              </p>
              <p className="doctorProfileInfo__list-text">
                date of birth: {doctorUserData.date_of_birth}{" "}
              </p>
              <p className="doctorProfileInfo__list-text">
                phone number: {doctorUserData.phone_number}{" "}
              </p>
            </li>
          </ul>
        </div>
      </WrapperMain>
    </>
  );
};
export default DoctorProfileInfo;
