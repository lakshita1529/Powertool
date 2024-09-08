import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import '../../../styles/variable.css'; 

const DashboardHeader = () => {
  return (
    <div className="d-flex align-items-center p-3" style={{ backgroundColor: 'var(--header-bg-color)', color: 'var(--text-light)' }}>
      <FontAwesomeIcon icon={faTachometerAlt} className="me-3" style={{ fontSize: '40px' }} />
      <h1 className="m-0 fw-bold">PowerTools</h1>
    </div>
  );
};

export default DashboardHeader;
