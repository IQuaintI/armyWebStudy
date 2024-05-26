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

    {/* more nested routes */}
  </>
);
