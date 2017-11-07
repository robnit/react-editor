import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      outputText: 'woof',
      fontSize: 36
    };
  }

  handleTextChange(value) {
    this.setState({ outputText: value });
  }

  render() {
    const { outputText, fontSize } = this.state;

    return (
      <div>
        <Controls outputText={outputText}
          onTextChange={outputText => this.handleTextChange(outputText)}/>
        <Text outputText={outputText} fontSize={fontSize} />
      </div>
    );
  }

}

class Controls extends Component {
  render() {
    const { outputText, onTextChange } = this.props;

    return (
      <div>
        <label>
          Insert Text Here:
          <input name="outputText" value={outputText} onChange={({ target }) => onTextChange(target.value)}/>
        </label>
      </div>
    );
  }
}

class Text extends Component {
  render() {

    const { outputText, fontSize } = this.props;

    return (
      <div>
        <div>
          <label>
            <span style={{ fontSize }}>{outputText}</span>
          </label>
        </div>

      </div>
    );
  }
}

export default App;
