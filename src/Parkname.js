import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './ParkInfo.css';

function ParkName() {
  const [showInfo, setShowInfo] = useState(false);

  const handleToggleInfo = () => {
    setShowInfo(!showInfo);
  };

  const icon = showInfo ? faChevronUp : faChevronDown;

  return (
    <div className={`park-info-container ${showInfo ? 'expanded' : ''}`}>
      <h2 className="park-info-title" onClick={handleToggleInfo}>
        Why park a domain name in Parkname?
        <FontAwesomeIcon icon={icon} className="chevron-iconn" />
      </h2>
      {showInfo && (
        <div className="line"></div>
      )}
      {showInfo && (
        <p className="park-info-text">
          Park Name is a leading industry standard for domain name parking and monetization services. We offer a wide variety of services to help you achieve success.
        </p>
      )}
    </div>
  );
}

export default ParkName;
