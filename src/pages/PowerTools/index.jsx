import React from 'react';
import CardsGrid from '../../components/custom/CardGrid'; // Updated name from DashboardCard to CardsGrid
import DashboardHeader from '../../components/base/Header'; // Updated import path


const DashboardPage = () => {
  return (
    <div className="d-flex">

      <div className="flex-grow-1">
        <DashboardHeader />
      
        <CardsGrid />
      </div>
    </div>
  );
};

export default DashboardPage;
