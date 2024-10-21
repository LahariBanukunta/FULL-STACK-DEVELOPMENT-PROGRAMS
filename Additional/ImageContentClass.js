// ImageContentClass.js
import React from 'react';

class ImageContentClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: this.props.initialContent,
    };
  }

  changeContent = () => {
    this.setState({ content: "This is the new content from the Class Component!" });
  };

  render() {
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
        <h2>{this.props.title}</h2>
        <img src={this.props.image} alt="Content visual" style={imageStyle} />
        <p>{this.state.content}</p>
        <button onClick={this.changeContent}>Change Content</button>
      </div>
    );
  }
}

export default ImageContentClass;
