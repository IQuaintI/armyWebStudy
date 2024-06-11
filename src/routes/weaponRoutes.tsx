import { Route } from "react-router-dom";
import Safety from "../armyData/weaponsData/Safety";
import WeaponComponents from "../armyData/weaponsData/weaponComponents";
import Cooling from "../armyData/weaponsData/cooling";
import UnitsOfMeasurement from "../armyData/weaponsData/unitsOfMeasurement";
import Reticle from "../armyData/weaponsData/reticle";
import Optics from "../armyData/weaponsData/optics";
import Lasers from "../armyData/weaponsData/lasers";
import Mountables from "../armyData/weaponsData/mountables";
import ShotProcess from "../armyData/weaponsData/shotProcess";
import Stability from "../armyData/weaponsData/stability";
import CarryPositions from "../armyData/weaponsData/carryPositions";
import FiringPositions from "../armyData/weaponsData/firingPositions";
import CommonEngagements from "../armyData/weaponsData/commonEngagements";
import ComplexEngagements from "../armyData/weaponsData/complexEngagements";
import EnvironmentalConditions from "../armyData/weaponsData/environmentalConditions";
import Wobble from "../armyData/weaponsData/wobble";

export const WeaponRoutes = (
  <>
    <Route
      path="/weapon/units-of-measurement"
      element={<UnitsOfMeasurement />}
    />
    <Route path="/weapon/cooling" element={<Cooling />} />
    <Route path="/weapon/safety" element={<Safety />} />
    <Route path="/weapon/components" element={<WeaponComponents />} />
    <Route path="/weapon/reticle" element={<Reticle />} />
    <Route path="/weapon/optics" element={<Optics />} />
    <Route path="/weapon/lasers" element={<Lasers />} />
    <Route path="/weapon/mountables" element={<Mountables />} />
    <Route path="/weapon/shot-process" element={<ShotProcess />} />
    <Route path="/weapon/stability" element={<Stability />} />
    <Route path="/weapon/carry-positions" element={<CarryPositions />} />
    <Route path="/weapon/firing-positions" element={<FiringPositions />} />
    <Route path="/weapon/common-engagements" element={<CommonEngagements />} />
    <Route path="/weapon/complex-engagements" element={<ComplexEngagements />} />
    <Route path="/weapon/environmental-conditions" element={<EnvironmentalConditions />} />
    <Route path="/weapon/wobble" element={<Wobble />} />

    {/* more nested routes */}
  </>
);
