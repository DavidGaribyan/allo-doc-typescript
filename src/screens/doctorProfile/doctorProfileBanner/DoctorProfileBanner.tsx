import WrapperMain from "../../../components/wrapperMain/WrapperMain";
import bannerArrow from "./bannerArrow.png";
import "./doctorProfileBanner.css";
import { useTranslation } from "react-i18next";

interface DoctorProfileBannerProps {
  initial: {
    first_name: string;
    last_name: string;
    profile_image: string;
    email: string;
    phone_number: string;
    doctor_details: DoctorDetails;
  };
}

interface DoctorDetails {
  consultation_duration: string;
  price: string;
}

const DoctorProfileBanner: React.FC<DoctorProfileBannerProps> = function ({
  initial,
}) {
  const { t } = useTranslation();
  const doctorUserData = initial;
  console.log(doctorUserData);

  return (
    <>
      <div className="doctorProfile__wrapper">
        <WrapperMain>
          <div className="doctorBanner__info-wrapper">
            <div className="banner__links">
              <p>{t("doctorUserPage.doctorUserPageDoctors")}</p>
              <img src={bannerArrow} alt="arrow" />
              <p>{t("doctorUserPage.doctorUserPageProffesion")}</p>
              <img src={bannerArrow} alt="arrow" />
              <p>{t("doctorUserPage.doctorUserPageProfile")}</p>
            </div>
            <div className="profile__banner-info">
              <img
                src={doctorUserData.profile_image}
                alt="avatar"
                className="banner__avatar"
              />
              <div className="profile__banner-info-text">
                <p className="doctorBanner__info-doctorName">
                  {doctorUserData.first_name} {doctorUserData.last_name}
                </p>
                <p className="doctorBanner__info-doctorStaff">
                  {doctorUserData.email}
                </p>
                <p className="doctorBanner__info-doctorStage">
                  {doctorUserData.phone_number}
                </p>
              </div>
              <div className="profile__banner-price-info">
                <p className="profile__banner-price">
                  {doctorUserData.doctor_details.price} $/ консультация
                </p>
                <p>
                  {doctorUserData.doctor_details.consultation_duration} минут
                </p>
              </div>
            </div>
          </div>
        </WrapperMain>
      </div>
    </>
  );
};
export default DoctorProfileBanner;
/* <div className="doctorProfile__wrapper">
        <WrapperMain>
          <div className="doctorBanner__info-wrapper">
            <div className="banner__links">
              <p>{t('doctorUserPage.doctorUserPageDoctors')}</p>
              <img src={bannerArrow} alt="arrow" />
              <p>{t('doctorUserPage.doctorUserPageProffesion')}</p>
              <img src={bannerArrow} alt="arrow" />
              <p>{t('doctorUserPage.doctorUserPageProfile')}</p>
            </div>
            <div className="profile__banner-info">
              <img src={`../${doctorUserData.avatar}`} alt="avatar" className="banner__avatar" />
              <div className="profile__banner-info-text">
                <p className="doctorBanner__info-doctorName">{doctorUserData.doctorName}</p>
                <p className="doctorBanner__info-doctorStaff">{doctorUserData.staff}</p>
                <p className="doctorBanner__info-doctorStage">{doctorUserData.stage}</p>
              </div>
              <div className="profile__banner-price-info">
                <p className="profile__banner-price">{t('doctorUserPage.doctorUserPagePrice')}</p>
                <p>{t('doctorUserPage.doctorUserPageTime')}</p>
              </div>
            </div>
          </div> */
