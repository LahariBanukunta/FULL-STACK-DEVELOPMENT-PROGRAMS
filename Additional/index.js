// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import ImageContentClass from './ImageContentClass';
import ImageContentFunction from './ImageContentFunction';
import './index.css'; // Optional: Add your CSS styles here

const title = "Welcome to My Page!";
const imageUrl = "https://via.placeholder.com/300"; // Replace with your image URL
const initialContent = "This is the initial content displayed on the page.";

ReactDOM.render(
  <React.StrictMode>
    <div>
      <ImageContentClass title={title} image={imageUrl} initialContent={initialContent} />
      <ImageContentFunction title={title} image={imageUrl} initialContent={initialContent} />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
