import React from 'react';
import '../App.css';
import FIgraph from '../images/feature-importance.png';
import FIcorr from '../images/feature-correlation.png';

const DnnDataPage = () => {

    const pageStyle = {
        backgroundColor: '#2A52BE',
        color: 'white',
        textAlign: 'center',
        padding: '20px',
      };

    return (
        <div style={pageStyle}>
            <div>
                <p>Feature importance measures the significance of input features in influencing the predictions of a DNN. Feature correlation quantifies how changes in one feature are related to changes in another feature. Check out our <a href="/info"style={{ color: '#BCF8EC' }}>info page</a> for more details!</p>
            </div>
            <div>
                <img src={FIgraph} alt="Feature Importance Graph" style={{ width: '45%', height: 'auto' , marginRight: '2%' }}/>
                <img src={FIcorr} alt="Feature Correlation Matrix" style={{ width: '45%', height: 'auto' }}/>
            </div>
        </div> 
    );
  };

export default DnnDataPage;
