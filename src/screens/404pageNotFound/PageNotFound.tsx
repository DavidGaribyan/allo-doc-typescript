import { Link } from "react-router-dom";
import WrapperMain from "../../components/wrapperMain/WrapperMain";
import "./pageNotFound.css";
import { useTranslation } from "react-i18next";

export default function PageNotFound() {
  const { t } = useTranslation();
  return (
    <>
      <WrapperMain>
        <div className="page404__wrap">
          <h1 className="page404__heading">404</h1>
          <p className="page404__text">
            {t("pageNotFound.pageNotFoundText_1")}
          </p>
          <p className="page404__text-home">
            {t("pageNotFound.pageNotFoundText_2")}
          </p>
          <Link to="/" className="page404__btn">
            {t("pageNotFound.pageNotFoundBtn")}
          </Link>
        </div>
      </WrapperMain>
    </>
  );
}
