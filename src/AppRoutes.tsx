//Admin
import { Routes, Route } from "react-router-dom";
import Testing from "./components/Testing";
import HomePage from "./components/HomePage";
import Medical from "./homeCards/Medical";
import Weapons from "./homeCards/Weapons";

//Layouts
import MedicalLayout from "./routes/MedicalLayouts";
import WeaponLayout from "./routes/WeaponLayouts";

//Sub-Routes
import { MedicalRoutes } from "./routes/medicalRoutes";
import { WeaponRoutes } from "./routes/weaponRoutes";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Main Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/testing" element={<Testing />} />

      {/* Weapons */}
      <Route element={<WeaponLayout />}>
        <Route path="/weapon" element={<Weapons />}>
          {/* Weapons Sub-Routes */}
          {WeaponRoutes}
        </Route>
      </Route>

      {/* Medical */}
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
