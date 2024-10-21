// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ClassComponent from './ClassComponent';  // Import the ClassComponent

ReactDOM.render(
  <React.StrictMode>
    {/* Create an instance of ClassComponent and pass props */}
    <ClassComponent
      title="Welcome to React Class Component"
      image="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
      content="This is a simple example demonstrating a ReactJS Class Component with a title, image, and some content."
    />
  </React.StrictMode>,
  document.getElementById('root')
);
