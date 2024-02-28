import { Route } from "react-router-dom";
import AbdominalWounds from "../armyData/medicalData/abdominalWounds";
import Bleeding from "../armyData/medicalData/bleeding";
import Breathing from "../armyData/medicalData/breathing";

export const MedicalRoutes = (
  <>
    <Route path="abdominal-wounds" element={<AbdominalWounds />} />
    <Route path="bleeding" element={<Bleeding />} />
    <Route path="breathing" element={<Breathing />} />
    {/* more nested routes */}
  </>
);
