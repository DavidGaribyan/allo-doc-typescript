import WrapperMain from "../wrapperMain/WrapperMain";
import Consultations from "./consultations/Consultation";
import BookDoc from "./book/BookDoc";
import Notes from "./notes/notesList/Notes";

export default function MainContent() {
  return (
    <>
      <WrapperMain>
        <Consultations />
      </WrapperMain>
      <WrapperMain>
        <BookDoc />
        <Notes />
      </WrapperMain>
    </>
  );
}
