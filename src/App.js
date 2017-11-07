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

  handleFontSizeChange(value) {
    this.setState({ fontSize: value });
  }

  render() {
    const { outputText, fontSize } = this.state;

    return (
      <div>
        <Controls outputText={outputText}
          onTextChange={outputText => this.handleTextChange(outputText)}
          onFontSizeChange={fontSize => this.handleFontSizeChange(fontSize)}/>
        <Text outputText={outputText} fontSize={fontSize} />
      </div>
    );
  }

}

class Controls extends Component {
  render() {
    const { outputText, onTextChange, fontSize, onFontSizeChange } = this.props;

    return (
      <div>
        <label>
          Insert Text Here:
          <input name="outputText" value={outputText} onChange={({ target }) => onTextChange(target.value)}/>
        </label>
        <label>
          Font Size:
          <input name="fontSize" value={fontSize} onChange={({ target }) => onFontSizeChange(target.value)}/>
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
