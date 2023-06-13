import React from 'react';
import MainLogo from '../images/main-logo.png';
//need another image here (ClarityAI text)
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const HomePage = () => {
    const pageStyle = {
      backgroundColor: '#2A52BE',
      color: 'white',
      textAlign: 'center',
      padding: '20px',
    };
  
    return (
      <div style={pageStyle}>
        <img 
        src={MainLogo}
        alt="Logo image"
        width="180"
        height="180"
      />
      <div>
            <h1 style={{ color: '#BCF8EC', fontFamily: 'Archivo Black, sans-serif', fontSize: '100px'}}>
            <span style={{ color: 'white' }}>Clarity</span>AI.
            </h1>
      </div>
      <h1 style={{ color: '#BCF8EC', fontFamily: 'Archivo Black, sans-serif', fontSize: '30px'}}>Transparent AI For All</h1>
      <p>ClarityAI is a powerful tool that allows you to gain valuable insights into your model and
        interpret how it makes decisions.
      </p>
      <p>Being able to explain how models arrive at predictions from their dataset enhances trust,
         enables enformed decision making, and ensures responsible AI usage.
      </p>
      <p>Feature importance measures the significant of import features in influencing the predictions
         of a DNN. The model and a test dataset is required for predictions.
      </p>
      <p>Attention Maps highlight the specific regions of an input image that are most relevant in
         the decision-making process of a CNN.  
      </p>      
      <div style={{ display: 'flex', justifyContent: 'space-between' }}></div>
      <Link to= "/feature-importance" >
        <Button style={{backgroundColor: "#BCF8EC", color: "#00005c",fontFamily: 'Archivo Black, sans-serif', margin: "2%", boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)", border:'0'}}size='lg'>Generate Feature Importance</Button>{' '}
      </Link>
      <Link to="/attention-maps">
        <Button style={{backgroundColor: "#BCF8EC", color: "#00005c", fontFamily: 'Archivo Black, sans-serif', margin: "2%", boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)", border:'0'}}size='lg'>Generate Attention Maps</Button>{' '}
      </Link>
      </div>
    );
  };

export default HomePage;