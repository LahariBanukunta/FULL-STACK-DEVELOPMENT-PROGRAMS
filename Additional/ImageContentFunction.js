// ImageContentFunction.js
import React, { useState } from 'react';

const ImageContentFunction = ({ title, image, initialContent }) => {
  const [content, setContent] = useState(initialContent);

  const changeContent = () => {
    setContent("This is the new content from the Functional Component!");
  };

  // Define styles as a JavaScript object
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    margin: '20px',
  };

  const imageStyle = {
    width: '300px',
    height: 'auto',
  };

  return (
    <div style={containerStyle}>
      <h2>{title}</h2>
      <img src={image} alt="Content visual" style={imageStyle} />
      <p>{content}</p>
      <button onClick={changeContent}>Change Content</button>
    </div>
  );
};

export default ImageContentFunction;
