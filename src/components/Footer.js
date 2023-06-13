import React from 'react';
import mail from '../images/mail.png'; 
import github from '../images/github.png'; 
import logo from '../images/main-logo.png'

const Footer = () => {
  return (
    
    <footer style={{ backgroundColor: '#2A52BE', padding: '20px', textAlign: 'center', color: 'white', borderTop: '1px solid #BCF8EC' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={mail} alt="Logo 1" style={{ width: '40px', height: '40px', marginRight: '10px' }} />
            <img src={logo} alt="Logo 1" style={{ width: '30px', height: '30px', marginRight: '17px' }} />
            <img src={github} alt="Logo 3" style={{ width: '25px', height: '25px' }} />
        </div>
        <p>This project was created by Anna Lai, Jasmine Sun-Hu, Jasmine Zhang, Jeanine Ohene-Agyei and Matya Stavnitzky under the support of <a href="https://www.ai4goodlab.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#BCF8EC' }}>AI4Good Lab</a> </p>
        <p style={{fontSize: '12px'}}>© 2023 ClarityAI. All rights reserved (not really tho).</p>
    </footer>
  );
};

export default Footer;