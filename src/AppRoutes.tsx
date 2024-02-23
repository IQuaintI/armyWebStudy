//Admin
import { Routes, Route } from "react-router-dom";
import Testing from "./components/Testing";
import HomePage from "./components/HomePage";
import Medical from "./homeCards/Medical";

//Medical Sub-Routes
import AbdominalWounds from "./armyData/medicalData/abdominalWounds";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Main Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/testing" element={<Testing />} />
      <Route path="/medical" element={<Medical />} />
      {/* Medical Sub-Routes */}
      <Route path="/medical/abdominal-wounds" element={<AbdominalWounds />} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
};

export default AppRoutes;
