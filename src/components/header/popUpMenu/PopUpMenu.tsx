import "./popUpMenu.css";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
interface PopUpMenuProps {
  popUp: boolean;
}
interface MenuData {
  icon: string;
  text: string;
}

const PopUpMenu: React.FC<PopUpMenuProps> = function ({ popUp }) {
  const { t } = useTranslation();
  const menuData: MenuData[] = t("menuData", {
    returnObjects: true,
  });

  return (
    <>
      <ul className={`popUp__list ${popUp ? "visible" : ""}`}>
        {menuData.map((item, index) => {
          return (
            <Link
              to={
                item.text === "Пополнить баланс" ||
                item.text === "Top up balance"
                  ? "/balance"
                  : "/*"
              }
              className="popUp__item"
              key={index}
            >
              <button className="popUp__item-btn">
                <img src={`../${item.icon}`} alt="icons" />
                <span className="popUp__itext">{item.text}</span>
              </button>
            </Link>
          );
        })}
      </ul>
    </>
  );
};

export default PopUpMenu;
