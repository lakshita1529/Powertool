import '../../styles/Automation.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

const Automation = () => {
  const [selectedAutomation, setSelectedAutomation] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const automations = [
    { id: 1, title: 'Automation 1', description: 'Description of automation 1', details: 'This is detailed information about Automation 1' },
    { id: 2, title: 'Automation 2', description: 'Description of automation 2', details: 'This is detailed information about Automation 2' },
    { id: 3, title: 'Automation 3', description: 'Description of automation 3', details: 'This is detailed information about Automation 3' },
    { id: 4, title: 'Automation 4', description: 'Description of automation 4', details: 'This is detailed information about Automation 4' },
    { id: 5, title: 'Automation 5', description: 'Description of automation 5', details: 'This is detailed information about Automation 5' },
    { id: 6, title: 'Automation 6', description: 'Description of automation 6', details: 'This is detailed information about Automation 6' },
  ];

  const handleShowDetails = (automation) => {
    setSelectedAutomation(automation);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedAutomation(null);
  };

  return (
    <div className="automation-container">
      <h2 className="automation-header">Automation Page</h2>
      <div className="card-container">
        {automations.map((automation) => (
          <Card className="automation-card" key={automation.id}>
            <Card.Body>
              <Card.Title>{automation.title}</Card.Title>
              <Card.Text>{automation.description}</Card.Text>
              <Button variant="primary" onClick={() => handleShowDetails(automation)}>Run Automation</Button>
            </Card.Body>
          </Card>
        ))}
      </div>

      {/* Modal for showing automation details */}
      {selectedAutomation && (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedAutomation.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{selectedAutomation.details}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default Automation;
