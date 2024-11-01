import React, { useState } from 'react';

function EventHandling() {
  const [count, setCount] = useState(0);
  
  const countIncrement = () => {
    setCount(count + 1);
  };

  const pageStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#8bc6ec',
  };

  const EventDivStyle = {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: 'lavender',
    width: '300px',
    height: '300px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: '10px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    
    color: '#fff',
    backgroundColor: '#333333',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  
    margin: '10px 5px', // Adds space between buttons
  };

  const incrementButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#4CAF50', // Green color for increment
  };

  const resetButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#FF5252', // Red color for reset
  };

  return (
    <div style={pageStyle}>
      <div style={EventDivStyle}>
        <h2>Click the button to increment the count</h2>
        <h2>Count is: {count}</h2>
        <button
          onClick={countIncrement}
          style={incrementButtonStyle}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#45a049')} // Darker green on hover
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = incrementButtonStyle.backgroundColor)}
        >
          Increment
        </button>
        <button
          onClick={() => setCount(0)}
          style={resetButtonStyle}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#e57373')} // Lighter red on hover
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = resetButtonStyle.backgroundColor)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default EventHandling;
