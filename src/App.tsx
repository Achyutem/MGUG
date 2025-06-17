import { Routes, Route } from "react-router-dom";
import UniversityLandingPage from "./pages/home";
import AboutUs from "./pages/aboutUs";
import UniversityLogo from "./pages/universityLogo";
import Chancellor from "./pages/Administration/Leadership/chancellor";
import ViceChancellor from "./pages/Administration/Leadership/viceChancellor";
import ProChancellor from "./pages/Administration/Leadership/proChancellor";
import Registrar from "./pages/Administration/Leadership/registrar";
import FinanceOfficer from "./pages/Administration/Leadership/financeOfficer";
import ControllerOfExamination from "./pages/Administration/Leadership/controllerOfExamination";
import ChiefProctor from "./pages/Administration/Leadership/chiefProctor";
import ChiefVigilanceOfficer from "./pages/Administration/Leadership/chiefVigilance";
import OmbudsPerson from "./pages/Administration/Leadership/ombudsPerson";
import EmpoweredBody from "./pages/Administration/statuoryBody/empoweredBody";
import GoverningBody from "./pages/Administration/statuoryBody/governingBody";
import ExecutiveCouncil from "./pages/Administration/statuoryBody/executiveCouncil";
import AcademicCouncil from "./pages/Administration/statuoryBody/academicCouncil";
import BoardOfStudies from "./pages/Administration/statuoryBody/boardofStudies";
import FinanceCommittee from "./pages/Administration/Committees/financeCommittees";
import ExaminationCommittee from "./pages/Administration/Committees/examinationCommittee";
import SGRCAndOmbudsperson from "./pages/Administration/Committees/sgrcAndOmbuds";
import AntiRagging from "./pages/Administration/Committees/antiRagging";

function App() {
  return (
    <Routes>
      <Route path="/" element={<UniversityLandingPage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/university-logo" element={<UniversityLogo />} />

      {/* Administration routes */}
      <Route path="/administration/chancellor" element={<Chancellor />} />
      <Route
        path="/administration/pro-chancellor"
        element={<ProChancellor />}
      />
      <Route
        path="/administration/vice-chancellor"
        element={<ViceChancellor />}
      />
      <Route path="/administration/registrar" element={<Registrar />} />
      <Route
        path="/administration/finance-officer"
        element={<FinanceOfficer />}
      />
      <Route
        path="/administration/Controller-of-Examination"
        element={<ControllerOfExamination />}
      />
      <Route path="/administration/chief-proctor" element={<ChiefProctor />} />
      <Route
        path="/administration/Chief-Vigilance-Officer"
        element={<ChiefVigilanceOfficer />}
      />
      <Route path="/administration/Ombuds-person" element={<OmbudsPerson />} />

      {/* Statutory Body */}
      <Route
        path="/Statutory-Body/Empowered-Body"
        element={<EmpoweredBody />}
      />
      <Route
        path="/Statutory-Body/governing-Body"
        element={<GoverningBody />}
      />
      <Route
        path="/Statutory-Body/executive-council"
        element={<ExecutiveCouncil />}
      />
      <Route
        path="/Statutory-Body/academic-council"
        element={<AcademicCouncil />}
      />
      <Route
        path="/Statutory-Body/Board-of-Studies"
        element={<BoardOfStudies />}
      />

      {/* Committees */}
      <Route
        path="/Committee/Finance-Committee"
        element={<FinanceCommittee />}
      />
      <Route
        path="/Committee/Examination-Committee"
        element={<ExaminationCommittee />}
      />
      <Route path="/Committee/srgc" element={<SGRCAndOmbudsperson />} />
      <Route path="/Committee/Anti-ragging" element={<AntiRagging />} />
    </Routes>
  );
}

export default App;
