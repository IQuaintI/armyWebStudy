//Admin
import { Routes, Route } from "react-router-dom";
import Testing from "./components/Testing";
import HomePage from "./components/HomePage";
import Medical from "./homeCards/Medical";
import MedicalLayout from "./components/MedicalLayouts";
//Medical Sub-Routes
import {MedicalRoutes} from "./routes/medicalRoutes";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Main Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/testing" element={<Testing />} />
      <Route element={<MedicalLayout />}>
        <Route path="/medical" element={<Medical />}>
          {/* Medical Sub-Routes */}
          {MedicalRoutes}
        </Route>
        {/* Not Found */}
        <Route path="*" element={<h1>Not Found</h1>} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
