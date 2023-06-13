import React from 'react';
import CNNog from '../images/cnn-original.png';
import conv2d_5 from '../images/cnn1.png';
import max_pooling2d_3 from '../images/cnn2.png';
import conv2d_6 from '../images/cnn3.png';
import max_pooling2d_4 from '../images/cnn4.png';
import conv2d_7 from '../images/cnn5.png';
import conv2d_8 from '../images/cnn6.png';
import conv2d_9 from '../images/cnn7.png';
import max_pooling2d_5 from '../images/cnn8.png';

const CnnDataPage = () => {
    const pageStyle = {
      backgroundColor: '#2A52BE',
      color: 'white',
      textAlign: 'center',
      padding: '20px',
    };

    const imageLayoutStyle = {
      flex: '1', 
      marginRight: '20px', 
      marginBottom: '20px', 
      minWidth: '300px',
      display: 'flex', 
      flexWrap: 'wrap',
      justifyContent: 'center',
      
    };

    const imageStyle = {
      width: '400px', 
      height: 'auto', 
      padding: '20px',
    };
  
    return (
      <div style={pageStyle}>
          <div>
              <p>Attention maps highlight the specific regions of an input image that are most relevant in the decision-making process of a CNN. Check out our <a href="/info"style={{ color: '#BCF8EC' }}>info page</a> for more details!</p>
          </div>
          <div style={imageLayoutStyle}>
            <div>
              <img src={CNNog} alt="Original Image" style={imageStyle}/>
              <p className="image-label">Original Image</p>
            </div>
            <div>
              <img src={conv2d_5} alt="Original Image" style={imageStyle}/>
              <p className="image-label">Layer: conv2d_5</p>
            </div>
            <div>
              <img src={max_pooling2d_3} alt="Original Image" style={imageStyle}/>
              <p className="image-label">Layer: max_pooling2d_3</p>
            </div>
            <div>
              <img src={conv2d_6} alt="Original Image" style={imageStyle}/>
              <p className="image-label">Layer: conv2d_6</p>
            </div>
            <div>
              <img src={max_pooling2d_4} alt="Original Image" style={imageStyle}/>
              <p className="image-label">Layer: max_pooling2d_4</p>
            </div>
            <div>
              <img src={conv2d_7} alt="Original Image" style={imageStyle}/>
              <p className="image-label">Layer: conv2d_7</p>
            </div>
            <div>
              <img src={conv2d_8} alt="Original Image" style={imageStyle}/>
              <p className="image-label">Layer: conv2d_8</p>
            </div>
            <div>
              <img src={max_pooling2d_5} alt="Original Image" style={imageStyle}/>
              <p className="image-label">Layer: max_pooling2d_5</p>
            </div>
            <div>
              <img src={conv2d_9} alt="Original Image" style={imageStyle}/>
              <p className="image-label">Layer: conv2d_9</p>
            </div>
          </div>
          <div style={{ padding: '4%' }}>
              <button style={{ backgroundColor: '#BCF8EC', color: '#2A52BE', padding: '10px 20px', fontSize: '16px' }}>Download</button>
          </div>
      </div> 
  );
};

export default CnnDataPage;
