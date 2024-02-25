import { Route } from "react-router-dom";
import AbdominalWounds from "../armyData/medicalData/abdominalWounds";
import Bleeding from "../armyData/medicalData/bleeding";

export const MedicalRoutes = (
  <>
    <Route path="abdominal-wounds" element={<AbdominalWounds />} />
    <Route path="bleeding" element={<Bleeding />} />
    {/* more nested routes */}
  </>
);
