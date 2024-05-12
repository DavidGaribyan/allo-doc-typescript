import Header from "./components/header/header";
import MainContent from "./components/main/MainContent";
import FooterContent from "./components/footer/FooterContent";
import DoctorProfile from "./screens/doctorProfile/DoctorProfile";
import Balance from "./screens/balance/Balance";
import { Route, Routes } from "react-router-dom";
import Notes from "./components/main/notes/notesList/Notes";
import PageNotFound from "./screens/404pageNotFound/PageNotFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/doctor/:id" element={<DoctorProfile />} />
        <Route path="/balance" element={<Balance />} />
        <Route path="/myNotes" element={<Notes show={true} />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <FooterContent />
    </>
  );
}

export default App;
