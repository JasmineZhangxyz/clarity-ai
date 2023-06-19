import React from 'react';
import MainLogo from '../images/main-logo.png';
import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const HomePage = () => {
    const pageStyle = {
      backgroundColor: '#2A52BE',
      color: 'white',
      textAlign: 'center',
      height: '160vh',
      width: '100wh',
      padding: '5vh',
    };

    const imageStyle ={
      height: '40vh',
      width: '40vh',
      marginBottom: '2vh'
    };

    const pStyle ={
      color: 'white',
      fontFamily: 'Montserrat, sans-serif',
      fontSize: '16px',
    };
  
    return (
      <div style={pageStyle}>
        <Image src={MainLogo}
        alt="Logo image"
        style={imageStyle}
        ></Image>
        
        <div>
            <h1 style={{ color: '#BCF8EC', fontFamily: 'Archivo Black, sans-serif', fontSize: '11vw' }}>
            <span style={{ color: 'white'}}>Clarity</span>AI.
            </h1>
        </div>
        <h1 style={{ color: '#BCF8EC', fontFamily: 'Archivo Black, sans-serif', fontSize: '5vw', padding: '10px'}}>Transparent AI For All</h1>
        <p style={pStyle}>ClarityAI is a powerful tool that allows you to gain valuable insights into your model and
          interpret how it makes decisions.
        </p>
        <p style={pStyle}>Being able to explain how models arrive at predictions from their dataset enhances trust,
          enables enformed decision making, and ensures responsible AI usage.
        </p>
        <p style={pStyle}>Feature importance measures the significant of import features in influencing the predictions
          of a DNN. The model and a test dataset is required for predictions.
        </p>
        <p style={pStyle}>Attention Maps highlight the specific regions of an input image that are most relevant in
          the decision-making process of a CNN.  
        </p>      

        <Link to= "/clarity-ai/feature-importance" >
        <Button style={{backgroundColor: "#BCF8EC", color: "#00005c",fontFamily: 'Archivo Black, sans-serif', margin: "2%", boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)", border:'0', height:'7vh', width: '50vh'}}>Generate Feature Importance</Button>
        </Link>
        <Link to="/clarity-ai/attention-maps">
        <Button style={{backgroundColor: "#BCF8EC", color: "#00005c", fontFamily: 'Archivo Black, sans-serif', margin: "2%", boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)", border:'0', height:'7vh', width: '50vh'}}>Generate Attention Maps</Button>
        </Link>

      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '2%' }}></div>
      

      </div>
    );
  };

export default HomePage;