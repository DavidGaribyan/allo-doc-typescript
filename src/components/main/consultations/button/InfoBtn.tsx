import { Link } from "react-router-dom";
import "./InfoBtn.css";

interface InfoBtnProps {
  btnName: string;
  className?: string;
}

const InfoBtn: React.FC<InfoBtnProps> = function (props) {
  return (
    <>
      <Link to="/sada" className={props.className}>
        {props.btnName}
      </Link>
    </>
  );
};
export default InfoBtn;
