import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeView from '../../pages/HomePage';
import Navbar from '../../components/shared/Navbar';
import Register from '../../pages/RegisterPage';
import Login from '../../pages/LoginPage';
import Dashboard from '../../pages/DashboardPage';
import Documentation from '../../pages/DocumentationPage';
import Automation from '../../pages/Automation';
import PowerTools from '../../pages/PowerTools';

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="documentation" element={<Documentation />} />
          <Route path="automation" element={<Automation />} />
          <Route path="powertools" element={<PowerTools />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
