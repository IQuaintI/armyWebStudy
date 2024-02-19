import { Routes, Route } from "react-router-dom";
import Testing from "./components/Testing";
import HomePage from "./components/HomePage"; // Assuming you have a HomePage component for the root
// Import other components you route to

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/testing" element={<Testing />} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
};

export default AppRoutes;
