import React , { useState } from 'react';
import {Button, Form} from 'react-bootstrap'  
import { Link } from 'react-router-dom';

const FeatureImportancePage = (props) => {
  const [text, setText] = useState('');

  const onChange = (event) => {
    setText(event.target.value);
  };

  const handleFileChange = (event) => {
  const file = event.target.files[0];
  setText(file);
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
      marginTop: '3vh',
  };

  const formStyle = {
      marginRight: '2.5%',
      marginLeft: '2.5%',
      marginTop: '1%',
    };

  const controlStyle ={
      margin: '0% 0% 0% 0%',
      paddingTop: '0.7vh',
      paddingRight: '2vh',
      textAlign: "left",
  };

  const buttonStyle ={
      backgroundColor: '#BCF8EC',
      color:'black',
      margin: '5vh 0% 0% 2.5%',
      width: '50vh',
      border: 0,
      boxShadow: "3px 5px 5px rgba(46, 46, 46, 0.62)",
  }

  return (
    <div style={pageStyle}>
      <h6 style={textStyle}> Feature Importance measures the significance of input features influencing the predictions of a DNN. Check out our <Link to="/clarity-ai/info"style={{ color: '#BCF8EC' }}>info page</Link> for more details. </h6>
    
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

      <Link to= "/clarity-ai/dnn-data" >
      <Button style={buttonStyle} outline onClick={props.handlePrevious}>Generate Feature Importance Graphs</Button>
      </Link>
      
    </div>
  );
};


export default FeatureImportancePage;
