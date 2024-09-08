import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/slidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar d-flex flex-column vh-100 p-3">
      <h4 className="mb-4">Menu</h4>
      <ul className="nav flex-column">
        <li className="nav-item mb-3">
          <Link className="nav-link" to="/dashboard/documentation">Documentation</Link>
        </li>
        <li className="nav-item mb-3">
          <Link className="nav-link" to="/dashboard/automation">Automation</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard/powertools">Powertools</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
