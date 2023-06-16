import React from 'react';
import { Link } from 'react-router-dom';
import FIgraph from '../images/feature-importance.png';
import FIcorr from '../images/feature-correlation.png';

const DnnDataPage = () => {

    const pageStyle = {
        backgroundColor: '#2A52BE',
        color: 'white',
        textAlign: 'center',
        padding: '20px',
        fontFamily: 'Montserrat, sans-serif'
      };
  
      const imageLayoutStyle = { 
        marginBottom: '20px', 
        flexWrap: 'wrap',
      };
  
      const imageStyle = {
        maxWidth: '70%', 
        minWidth: '300px',
        height: 'auto', 
        padding: '20px',
      };
    
      return (
        <div style={pageStyle}>
            <div>
            <p>Feature importance measures the significance of input features in influencing the predictions of a DNN. Feature correlation quantifies how changes in one feature are related to changes in another feature. Check out our <Link to='/clarity-ai/info' style = {{ color: '#BCF8EC' }}>info page</Link> for more details!</p>
            </div>
            <div style={imageLayoutStyle}>
                <div>
                    <img src={FIgraph} alt="Feature Importance Graph" style={imageStyle}/>
                </div>
                <div>
                    <img src={FIcorr} alt="Feature Correlation Matrix" style={imageStyle}/>
                </div>
            </div>
            <div style={{ padding: '4%' }}>
                <button style={{ backgroundColor: '#BCF8EC', color: '#2A52BE', padding: '10px 20px', fontSize: '16px' }}>Download</button>
            </div>
        </div> 

    );
  };

export default DnnDataPage;
