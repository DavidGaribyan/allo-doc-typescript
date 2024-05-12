import Information from "./information/Information";
import doctorPic from "./doctor.png";
import "./consultations.css";

export default function Consultations() {
  return (
    <>
      <div className="consultation__cont">
        <Information />
        <img style={{ maxWidth: "610px" }} src={doctorPic} alt="doctor" />
      </div>
    </>
  );
}
