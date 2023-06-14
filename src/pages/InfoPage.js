import React from 'react';
import '../panel.css'; 

const Panel = ({ heading, subtext }) => (
  <div styleclassName="panel">
    <h3>{heading}</h3>
    <p>{subtext}</p>
  </div>
);

const Infopage = () => {
    const pageStyle = {
        backgroundColor: '#2A52BE',
        color: 'white',
        textAlign: 'center',
        padding: '20px',
      };

  return (
    <div style={pageStyle}>
      <div >
        <h2>What is interpretability?</h2>
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
        <div className="sub-panels">
          <Panel heading="For DNN's" subtext=
          "Text here: to be decided" />
          <Panel heading="For CNN's" subtext="Text here: to be decided" />
        </div>
      </div>

      <div className="panel">
        <h2>How can ClarityAI help?</h2>
        <p>
          Implementing interpretability can be challenging. Especially when you are just starting out. We 
          make it simple. Upload the model and data for a DNN or CNN and we will produce interpretable 
          graphics.
        </p>
      </div>
    </div>
  );
};

export default Infopage;
