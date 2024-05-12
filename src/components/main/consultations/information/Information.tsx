import "./information.css";
import Button from "../button/InfoBtn";
import { useTranslation } from "react-i18next";
export default function Information() {
  const { t } = useTranslation();

  return (
    <>
      <div className="info__wrapper">
        <h1 className="information__heading">
          <span className="heading__decoration">
            {t("mainInfo.headingDecoration")}
          </span>{" "}
          {t("mainInfo.headingText")}
        </h1>
        <p className="information__text">
          {t("mainInfo.informationText")}{" "}
          <span className="infoText__decor">{t("mainInfo.infoTextDecor")}</span>{" "}
          {t("mainInfo.separateText")}{" "}
          <span className="infoText__decor">
            {t("mainInfo.infoTextDecor_2")}
          </span>{" "}
          {t("mainInfo.informationText_2")}{" "}
          <span className="stores__decor">{t("mainInfo.store_1")}</span>{" "}
          {t("mainInfo.and")}{" "}
          <span className="stores__decor">{t("mainInfo.store_2")}</span>
        </p>
        <Button className="white" btnName={t("mainInfo.btn_book")} />
        <Button className="blue" btnName={t("mainInfo.btn_how")} />
      </div>
    </>
  );
}
