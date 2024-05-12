import "./header.css";
import WrapperShadow from "../wrapperShadow/WrapperShadow";
import Wrapper from "./headerWrapper/Wrapper";
import Logo from "./Logo/LogoMain";
import HeaderList from "./headerList/HeaderList";
import Notification from "./Notification/Notification";
import LoginUser from "./LoginUser/LoginUser";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();
  return (
    <>
      <WrapperShadow>
        <Wrapper>
          <Logo />
          <div className="header__wrap">
            <HeaderList />
            <Notification notCount="3" />
            <LoginUser userName={t("name")} userLetter={t("name").charAt(0)} />
          </div>
        </Wrapper>
      </WrapperShadow>
    </>
  );
}
