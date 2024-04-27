import { Route } from "react-router-dom";
import Safety from "../armyData/weaponsData/Safety";
import WeaponComponents from "../armyData/weaponsData/weaponComponents";

export const WeaponRoutes = (
  <>
    <Route path="/weapon/safety" element={<Safety />} />
    <Route path="/weapon/components" element={<WeaponComponents />} />

    {/* more nested routes */}
  </>
);
