import React from 'react';
import Sidebar from '../../components/custom/DashboardSidebar';
import { Outlet } from 'react-router-dom';
//import Documentation from '../../views/DocumenationView'


const Dashboard = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1">
       
        <div className="container mt-4">
      
          <Outlet /> {/* This will render the selected page */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
