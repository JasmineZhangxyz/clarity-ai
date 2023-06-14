import React from 'react';
import mail from '../images/mail.png'; 
import github from '../images/github.png'; 
import logo from '../images/main-logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {

  const footerStyle = {
    flexShrink: '0', 
    padding: '20px',
    backgroundColor: '#2A52BE',
    textAlign: 'center', 
    color: 'white', 
    borderTop: '1px solid #BCF8EC',
  }
  return (
    <footer style={footerStyle}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
        <img src={mail} alt="Logo 1" style={{ width: '40px', height: '40px', marginRight: '10px' }} />
        <Link to='/clarity-ai'>
          <img src={logo} alt="Logo 2" style={{ width: '30px', height: '30px', marginRight: '17px' }} />
        </Link>
        <a href="https://github.com/JasmineZhangxyz/clarity-ai" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="Logo 3" style={{ width: '25px', height: '25px' }} />
        </a>
      </div>
      <p style={{ fontSize: '12px' }}>© 2023 ClarityAI.</p>
    </footer>
  );
};

export default Footer;