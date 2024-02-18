import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './TrainHookComponent.css';

function TrainHookComponent() {
  const [showInfo, setShowInfo] = useState(false);
  const [subQuestions, setSubQuestions] = useState([false, false, false, false]);

  const handleToggleInfo = () => {
    setShowInfo(!showInfo);
  };

  const handleToggleSubQuestion = (index) => {
    const updatedSubQuestions = [...subQuestions];
    updatedSubQuestions[index] = !updatedSubQuestions[index];
    setSubQuestions(updatedSubQuestions);
  };

  const icon = showInfo ? faChevronUp : faChevronDown;

  return (
    <div className="custom-accordion-container">
      <div className="question-container" onClick={handleToggleInfo}>
      <FontAwesomeIcon icon={["far", "circle", "user"]} className="user-icon" />
        <span>About Us</span>
        <FontAwesomeIcon icon={icon} className="chevron-icon" />
      </div>
      {showInfo && (
        <div className="answer-container">
          {[
            { question: 'How does Parkname seperate itself from other domain name parking companies?', answer: 'Your domains are a valuable online property. As in any investment, you want the most efficient,easy way to make sure your property is going to be profitable. Do you own more than 1,000 domains? As a profesional domainer, you will find everything you need through Parkname to generate maximum profits from your domain portfolio.' },
            { question: 'Is Parkname Parking actually free?', answer: 'No, Parkname Parking is not actually free. People have to pay for it.' },
            { question: 'What you do?', answer: 'Securing common misspellings of your primary domain name. Registering your primary domain using other Top-Level Domains (TLDs).  ' },
            { question: 'When was Parkname first founded?', answer: 'March, 2011.' },
          ].map((item, index) => (
            <div key={index}>
              <div className="sub-question-container" onClick={() => handleToggleSubQuestion(index)}>
                <span>{item.question}</span>
                {subQuestions[index] && <p>{item.answer}</p>}
                <FontAwesomeIcon icon={subQuestions[index] ? faChevronUp : faChevronRight} className="chevron-sub-icon" />
              </div>
              {index < 3 && <div className="line"></div>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TrainHookComponent;
