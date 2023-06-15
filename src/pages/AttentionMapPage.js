import React , { useState } from 'react';
import {Button, Form} from 'react-bootstrap'
import { Link } from 'react-router-dom';  

const AttentionMapPage = (props) => {
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
        <h6 style={textStyle}>Attention maps highlight the specific regions of an input image that are most relevant in the decision making proecss of a CNN. Check out our <a href="/info"style={{ color: '#BCF8EC' }}>info page</a> for more details!</h6>
      
        <Form.Group style={formStyle}>
        <Form.Label><h6 style={textStyle}> Upload your CNN model here</h6></Form.Label>
        <Form.Control style={controlStyle}
            type="file" 
            onChange={handleFileChange} 
        />
        <Form.Label><h6 style={textStyle}> Upload your test image here</h6></Form.Label>
        <Form.Control style={controlStyle}
            type="file" 
            onChange={handleFileChange} 
        />
        <Form.Label><h6 style={textStyle}> Type the names of your CNN layers, separed by commas</h6></Form.Label>
        <Form.Control style={controlStyle}
            type="text"
            value={text}
            onChange={onChange}
            placeholder="layer 1, layer 2, layer 3"
        />
        </Form.Group>

        <Link to= "/clarity-ai/cnn-data" >
        <Button style={buttonStyle} outline onClick={props.handlePrevious}>Generate Attention Maps</Button>
        </Link>
        
      </div>
    );
  };

export default AttentionMapPage;
