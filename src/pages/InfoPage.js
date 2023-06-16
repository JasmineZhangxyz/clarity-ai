import React from 'react';
import '../panel.css'; 
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Panel = ({ heading, subtext }) => (
  <div style={{ className: 'panel' }}>
    <h3>{heading}</h3>
    <p>{subtext}</p>
  </div>
);

const Infopage = () => {
    const pageStyle = {
        backgroundColor: '#2A52BE',
        color: 'white',
        textAlign: 'center',
        padding: '5vh',
        fontFamily: 'Montserrat, sans-serif',
      };

  return (
    <div style={pageStyle}>
      <div >
        <h2 style={{padding: '2vh'}}>What is interpretability?</h2>
        <p>
           Interpretability is the ability to understand and explain how complex machine learning models
           make its decisions/predictions. Our project looks in “black-box” models, or models that lack opacity 
           and explainability. The more interpretable a model is, the more trustworthy it becomes. Even if a model’s
           predictions are incorrect, we tend to trust interpretable models more since we can explain why the 
           predictions are wrong, whereas uninterpretable models may be incorrect but we cannot explain why the
           model outputs incorrect information.

           Striving to use interpretable models over uninterpretable models can mitigate fairness and bias, bridge 
           the gap between technical complexity and public comprehension, and reduce the chances of harmful or erroneous 
           outcomes
        </p>
        <p>
            There are 2 types of interpretability. 1) inherent interpretability: which is when the models are
            simple enough that they are easily understood by humans. 2) Interpretability methods: which allows 
            people to understand complext models by providing more information. 
        </p>
        <div className="sub-panels" style={{marginBlockStart: '5vh'}}>
          <Panel
            heading="Interpretable Methods and DNN's"
            subtext="Deep Neural Networks take a variety of features and return an output. Feature importance allows 
            developers to see which features are weighed the most when arriving at a decision."
          />
          <Panel
            heading="Interpretable Methods and CNN's"
            subtext="Convolutional Neural Networks classify images by identifying features. Attention maps allow 
            developers to see the parts of the image the CNN is focusing on to make its decision."
          />
        </div>
      </div>

      <div className="panel">
        <h2 style={{padding: '2vh'}}>How can ClarityAI help?</h2>
        <p style={{marginLeft: '3vw', marginRight: '3vw'}}>
          Implementing interpretability can be challenging. Especially when you are just starting out. We 
          make it simple. Upload your model and data for a DNN or CNN and we will produce interpretable 
          graphics.
        </p>
        <Link to= "/clarity-ai/feature-importance" >
        <Button style={{backgroundColor: "#BCF8EC", color: "#2A52BE",fontFamily: 'Archivo Black, sans-serif', margin: "2%", boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)", border:'0'}}size='lg'>Generate Feature Importance</Button>{' '}
        </Link>
        <Link to="/clarity-ai/attention-maps">
        <Button style={{backgroundColor: "#BCF8EC", color: "#2A52BE", fontFamily: 'Archivo Black, sans-serif', margin: "2%", boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)", border:'0'}}size='lg'>Generate Attention Maps</Button>{' '}
        </Link>  
      </div>
    </div>
  );
};

export default Infopage;
