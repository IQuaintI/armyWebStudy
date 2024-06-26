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
import Fractures from "../armyData/medicalData/fractures";
import HeatInjury from "../armyData/medicalData/heatInjury";
import HeadInjury from "../armyData/medicalData/headInjury";
import NerveAgents from "../armyData/medicalData/nerveAgents";
import ChestWounds from "../armyData/medicalData/chestWounds";
import AnaphylacticShock from "../armyData/medicalData/anaphylacticShock";
import CasualtyEvaluation from "../armyData/medicalData/casualtyEvaluation";
import Anatomy from "../armyData/medicalData/anatomy";
import Transportation from "../armyData/medicalData/transportation";

export const MedicalRoutes = (
  <>
    <Route path="abdominal-wounds" element={<AbdominalWounds />} />
    <Route path="airway" element={<Airway />} />
    <Route path="anaphylactic-shock" element={<AnaphylacticShock />} />
    <Route path="anatomy" element={<Anatomy />} />
    <Route path="bleeding" element={<Bleeding />} />
    <Route path="burns" element={<Burns />} />

    <Route path="casualty-evaluation" element={<CasualtyEvaluation />} />
    <Route path="cold-weather-injuries" element={<ColdWeatherInjuries />} />
    <Route path="chest-wounds" element={<ChestWounds />} />
    <Route
      path="carbon-monoxide-poisoning"
      element={<CarbonMonoxidePoisoning />}
    />

    <Route path="dehydration" element={<Dehydration />} />

    <Route path="eye-injury" element={<EyeInjury />} />

    <Route path="fractures" element={<Fractures />} />

    <Route
      path="gastrointestinal-issues"
      element={<GastrointestinalIssues />}
    />

    <Route path="head-injury" element={<HeadInjury />} />
    <Route path="heat-injury" element={<HeatInjury />} />

    <Route path="shock" element={<Shock />} />
    <Route path="stings-and-bites" element={<StingsAndBites />} />

    <Route path="transportation" element={<Transportation />} />

    <Route path="nerve-agents" element={<NerveAgents />} />
    {/* more nested routes */}
  </>
);
