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
            { title: "Airway", href: "/medical/airway" },
            { title: "Bleeding", href: "/medical/bleeding" },
            { title: "Burns", href: "/medical/burns" },
            {
              title: "Carbon Monoxide Poisoning",
              href: "/medical/carbon-monoxide-poisoning",
            },
            {
              title: "Cold Weather Injuries",
              href: "/medical/cold-weather-injuries",
            },
            {
              title: "Eye Injury",
              href: "/medical/eye-injury",
            },
            {
              title: "Fractures",
              href: "/medical/fractures",
            },
            {
              title: "Gastrointestinal Issues",
              href: "/medical/gastrointestinal-issues",
            },
            {
              title: "Head Injury",
              href: "/medical/head-injury",
            },
            {
              title: "Heat Injury",
              href: "/medical/heat-injury",
            },
            {
              title: "Dehydration",
              href: "/medical/dehydration",
            },
            {
              title: "Shock",
              href: "/medical/shock",
            },
            {
              title: "Stings and Bites",
              href: "/medical/stings-and-bites",
            },
            {
              title: "Nerve Agents",
              href: "/medical/nerve-agents",
            },
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
