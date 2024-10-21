// src/ClassComponent.js
import React, { Component } from 'react';

class ClassComponent extends Component {
  render() {
    return (
      <div style={styles.container}>
        <h1>{this.props.title}</h1>
        <img src={this.props.image} alt="React Example" style={styles.image} />
        <p>{this.props.content}</p>
      </div>
    );
  }
}

const styles = {
  container: {
    textAlign: 'center',
    margin: '20px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
  },
  image: {
    width: '300px',
    height: 'auto',
    marginTop: '20px',
  },
};

export default ClassComponent;
