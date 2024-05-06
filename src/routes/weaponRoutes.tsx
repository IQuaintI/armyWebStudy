import { Route } from "react-router-dom";
import Safety from "../armyData/weaponsData/Safety";
import WeaponComponents from "../armyData/weaponsData/weaponComponents";
import Cooling from "../armyData/weaponsData/cooling";
import UnitsOfMeasurement from "../armyData/weaponsData/unitsOfMeasurement";
import Reticle from "../armyData/weaponsData/reticle";
import Optics from "../armyData/weaponsData/optics";
import Lasers from "../armyData/weaponsData/lasers";

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

    {/* more nested routes */}
  </>
);
