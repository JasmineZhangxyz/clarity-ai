import React from 'react';
import FIgraph from '../images/feature-importance.png';
import FIcorr from '../images/feature-correlation.png';

const DnnDataPage = () => {

    const pageStyle = {
        backgroundColor: '#2A52BE',
        color: 'white',
        textAlign: 'center',
        padding: '20px',
        height: '100vh',
      };

    return (
        <div style={pageStyle}>
            <div>
                <p>Feature importance measures the significance of input features in influencing the predictions of a DNN. Feature correlation quantifies how changes in one feature are related to changes in another feature. Check out our <a href="/info"style={{ color: '#BCF8EC' }}>info page</a> for more details!</p>
            </div>
            <div>
                <img src={FIgraph} alt="Feature Importance Graph" style={{ width: '700px', height: 'auto' , padding: '20px' }}/>
                <img src={FIcorr} alt="Feature Correlation Matrix" style={{ width: '700px', height: 'auto', padding: '20px'}}/>
            </div>
            <div style={{ padding: '4%' }}>
                <button style={{ backgroundColor: '#BCF8EC', color: '#2A52BE', padding: '10px 20px', fontSize: '16px' }}>Download</button>
            </div>
        </div> 
    );
  };

export default DnnDataPage;
