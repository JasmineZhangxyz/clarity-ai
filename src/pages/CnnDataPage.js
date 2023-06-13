import React from 'react';
import '../App.css';


const CnnDataPage = () => {
    const pageStyle = {
      backgroundColor: '#2A52BE',
      color: 'white',
      textAlign: 'center',
      padding: '20px',
    };
  
    return (
      <div style={pageStyle}>
        <p>Attention maps highlight the specific regions of an input image that are most relevant in the decision-making process of a convolutional neural network. Check out our <a href="/info"style={{ color: '#BCF8EC' }}>info page</a> for more details!</p>
      </div>
    );
  };

export default CnnDataPage;
