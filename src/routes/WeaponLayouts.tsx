import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar"; // Adjust the import path as necessary
import "../css/Sidebar.scss"; // Adjust the import path as necessary

const WeaponLayout = () => {
  return (
    <div className="sidebar-layout">
      <div className="sidebar">
        <Sidebar
          items={[
            { title: "Home", href: "/" },
            { title: "Units of Measurement", href: "/weapon/units-of-measurement" },
            { title: "Safety", href: "/weapon/safety" },
            { title: "Weapon Components", href: "/weapon/components" },
            { title: "Cooling", href: "/weapon/cooling" },
            { title: "Reticle", href: "/weapon/reticle"},
            { title: "Optics", href: "/weapon/optics"}
            // Add more sidebar items as needed
          ]}
        />
      </div>
      <div className="main-content">
        <Outlet /> {/* Child routes will render here */}
      </div>
    </div>
  );
};

export default WeaponLayout;
