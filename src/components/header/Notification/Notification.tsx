import "./notification.css";
import notIcon from "./notification.png";

interface NotificationProps {
  notCount: string;
}

const Notification: React.FC<NotificationProps> = function (props) {
  return (
    <>
      <img className="not__icon" src={notIcon} alt="icon" />
      <div className="not__round">
        <span className="not__number">{props.notCount}</span>
      </div>
    </>
  );
};
export default Notification;
