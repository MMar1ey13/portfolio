import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';

const BottomIconLink = () => {
  const githubProfileURL = 'https://github.com/your-username'; // Replace with your GitHub profile URL

  const [showIcons, setShowIcons] = useState(false);

  const handleScroll = () => {
    const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 20;
    setShowIcons(scrolledToBottom);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`bottom-icons${showIcons ? ' show' : ''}`}>
      <a href= 'https://github.com/MMar1ey13' className="bottom-icon-link">
        <FontAwesomeIcon icon={faGithub} className={`icon${showIcons ? ' visible' : ''}`} />
      </a>
      <div className="contact-info">
        <a href="tel:+254713205535" className={`contact-icon${showIcons ? ' visible' : ''}`}>
          <FontAwesomeIcon icon={faPhone} className={`icon${showIcons ? ' visible' : ''}`} />
        </a>
        <a href="mwendamarley12@gmail.com" className={`contact-icon${showIcons ? ' visible' : ''}`}>
          <FontAwesomeIcon icon={faEnvelope} className={`icon${showIcons ? ' visible' : ''}`} />
        </a>
      </div>
    </div>
  );
};

export default BottomIconLink;
