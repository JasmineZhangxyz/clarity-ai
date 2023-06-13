import React , { useState } from 'react';
import {Button, Form} from 'react-bootstrap'  

const FeatureImportancePage = (props) => {
  const [text, setText] = useState('');

  const onChange = (event) => {
    setText(event.target.value);
  };

  const handleFileChange = (event) => {
  const file = event.target.files[0];
  onChange(file);
  };

  const pageStyle = {
      backgroundColor: "#2A52BE",
      color: 'white',
      textAlign: 'left',
      padding: '20px',
      flexDirection: 'row',
      height: '100vh',
    };

  const textStyle ={
      padding: '5px 5px 3px 5px',
      color: 'white',
      fontFamily: 'Montserrat, sans-serif',
      fontSize: '18px',
  };

  const formStyle = {
      padding: '5px',
      margin: '3%',
    };

  const controlStyle ={
      margin: '0% 0% 2% 0%',
  };

  const buttonStyle ={
      backgroundColor: '#BCF8EC',
      color:'black',
      margin: '0% 0% 0% 3.2%',
      width: '50vh',
      border: 0,
      boxShadow: "3px 5px 5px rgba(46, 46, 46, 0.62)",
  }

  return (
    <div style={pageStyle}>
      <h6 style={textStyle}> Feature Importance measures the significance of input features influencing the predictions of a CNN. Check out our info page for details. </h6>
    
      <Form.Group style={formStyle}>
      <Form.Label><h6 style={textStyle}> Upload your Neuro network model here</h6></Form.Label>
      <Form.Control style={controlStyle}
          type="file" 
          onChange={handleFileChange} 
      />
      <Form.Label><h6 style={textStyle}> Upload your test dataset here</h6></Form.Label>
      <Form.Control style={controlStyle}
          type="file" 
          onChange={handleFileChange} 
      />
      <Form.Label><h6 style={textStyle}> Type the names of your features in the order that they appear in the data, separated by commas</h6></Form.Label>
      <Form.Control style={controlStyle}
          type="text"
          value={text}
          onChange={onChange}
          placeholder="Feature 1, Feature 2, Feature 3, etc."
      />
      </Form.Group>

      <Button style={buttonStyle} outline onClick={props.handlePrevious}>Generate Attention Maps</Button>
    </div>
  );
};


export default FeatureImportancePage;
