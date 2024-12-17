import React, { useState } from 'react';

function EventHandling() {
  const [count, setCount] = useState(0);
  const [submittedValue, setSubmittedValue] = useState(null);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const handleSubmit = () => setSubmittedValue(count);

  // CSS Styles
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lavender',
    height: '100vh',
    textAlign : 'center'
  };

  

  const buttonStyle = {
    padding: '10px 20px',
    margin: '10px 5px',
    
    borderRadius: '5px',
    backgroundColor: 'blue',
    color: 'white',
    
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <div>
        <h2>Counter Application</h2>
        <h3>Current Count: {count}</h3>
        <div>
          <button style={buttonStyle} onClick={increment}>
            Increment
          </button>
          <button style={buttonStyle} onClick={decrement}>
            Decrement
          </button>
          <button style={buttonStyle} onClick={handleSubmit}>
            Submit
          </button>
        </div>
        {submittedValue !== null && (
          <h3>Submitted Counter Value: {submittedValue}</h3>
        )}
      </div>
    </div>
  );
}

export default EventHandling;
