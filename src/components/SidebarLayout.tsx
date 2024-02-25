import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar'; // Adjust the import path as necessary
import '../css/Sidebar.scss'; // Adjust the import path as necessary

const SidebarLayout = () => {
  return (
    <div className="sidebar-layout">
      <div className="sidebar">
        <Sidebar items={[
          
        ]}/>
      </div>
      <div className="main-content">
        <Outlet />  {/* Child routes will render here */}
      </div>
    </div>
  );
};

export default SidebarLayout;
