import { Route } from "react-router-dom";
import AbdominalWounds from "../armyData/medicalData/abdominalWounds";
import Bleeding from "../armyData/medicalData/bleeding";
import Airway from "../armyData/medicalData/airway";
import Burns from "../armyData/medicalData/burns";
import ColdWeatherInjuries from "../armyData/medicalData/coldWeatherInjuries";
import CarbonMonoxidePoisoning from "../armyData/medicalData/carbonMonoxidePoisoning";
import Dehydration from "../armyData/medicalData/dehydration";
import GastrointestinalIssues from "../armyData/medicalData/gastrointestinalIssues";
import StingsAndBites from "../armyData/medicalData/stingsAndBites";
import Shock from "../armyData/medicalData/shock";
import EyeInjury from "../armyData/medicalData/eyeInjury";

export const MedicalRoutes = (
  <>
    <Route path="abdominal-wounds" element={<AbdominalWounds />} />
    <Route path="airway" element={<Airway />} />

    <Route path="bleeding" element={<Bleeding />} />
    <Route path="burns" element={<Burns />} />

    <Route path="cold-weather-injuries" element={<ColdWeatherInjuries />} />
    <Route
      path="carbon-monoxide-poisoning"
      element={<CarbonMonoxidePoisoning />}
    />

    <Route path="dehydration" element={<Dehydration />} />

    <Route path="eye-injury" element={<EyeInjury />} />

    <Route
      path="gastrointestinal-issues"
      element={<GastrointestinalIssues />}
    />

    <Route path="shock" element={<Shock />} />
    <Route path="stings-and-bites" element={<StingsAndBites />} />

    {/* more nested routes */}
  </>
);
