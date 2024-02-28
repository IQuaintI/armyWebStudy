import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar"; // Adjust the import path as necessary
import "../css/Sidebar.scss"; // Adjust the import path as necessary

const MedicalLayout = () => {
  return (
    <div className="sidebar-layout">
      <div className="sidebar">
        <Sidebar
          items={[
            { title: "Home", href: "/" },
            { title: "Abdominal Wounds", href: "/medical/abdominal-wounds" },
            { title: "Bleeding", href: "/medical/bleeding" },
            { title: "Breathing", href: "/medical/breathing" },
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

export default MedicalLayout;
