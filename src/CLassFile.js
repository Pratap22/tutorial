import React from 'react';
import './App.css';

class ClassFile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: 0,
      value2: 0
    };
  }

  handle1Click = () => {
    this.setState({ value1: this.state.value1 + 1 });
  };

  handle2Click = () => {
    this.setState({ value2: this.state.value2 + 1 });
  };

  render() {
    console.log('Console ', this.state);
    return (
      <div>
        <p>Class </p>
        <button onClick={() => this.handle1Click()}>{this.state.value1}</button>
        <button onClick={() => this.handle2Click()}>{this.state.value2}</button>
      </div>
    );
  }
}

export default ClassFile;
