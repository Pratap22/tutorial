import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    value: [],
    text: ''
  };

  handleClick = () => {
    // handle click here
    let todos = this.state.value;

    todos.push(this.state.text);
    this.setState({
      value: todos,
      text: ''
    });
  };

  onInputChange = text => {
    // handle input change here
    this.setState({
      text
    });
  };

  handleDel = index => {
    let todoss = this.state.value;
    this.setState({
      value: todoss.filter((item, ind) => ind !== index)
    });
    console.log('Will be printed?');
  };
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Add todos"
          onChange={e => this.onInputChange(e.target.value)}
          value={this.state.text}
        />
        <button onClick={() => this.handleClick()}>Add</button>
        {this.state.value.map((item, index) => (
          <div key={index}>
            <p>{item}</p>{' '}
            <button onClick={() => this.handleDel(index)}>Del</button>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
