import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      outputText: 'woof',
      fontSize: 64,
      //Question: I'm using camelcase for 'letterSpacing', but in the DOM it reads as 'letter-spacing'. What's converting it?
      letterSpacing: 12
    };
  }

  handleTextChange(value) {
    this.setState({ outputText: value });
  }

  handleFontSizeChange(value) {
    this.setState({ fontSize: value });
  }

  handleLetterSpacingChange(value) {
    this.setState({ letterSpacing: value });
  }

  render() {
    const { outputText, fontSize, letterSpacing } = this.state;

    return (
      <div>
        <Controls outputText={outputText}
          onTextChange={outputText => this.handleTextChange(outputText)}
          onFontSizeChange={fontSize => this.handleFontSizeChange(fontSize)}
          onLetterSpacingChange={letterSpacing => this.handleLetterSpacingChange(letterSpacing)}/>
        <Text outputText={outputText} fontSize={fontSize} letterSpacing={letterSpacing} />
      </div>
    );
  }

}

class Controls extends Component {
  render() {
    const { outputText, onTextChange, fontSize, onFontSizeChange, letterSpacing, onLetterSpacingChange } = this.props;

    return (
      <div>
        <label>
          Insert Text Here:
          <input name="outputText" value={outputText} 
            onChange={({ target }) => onTextChange(target.value)}/>
        </label>
        <label>
          Font Size:
          <input name="fontSize" value={fontSize} type="range" min="0" max="100" 
            onChange={({ target }) => onFontSizeChange(target.value)}/>
        </label>
        <label>
          Letter Spacing:
          <input name="letterSpacing" value={letterSpacing} type="range" min="-50" max="150" 
            onChange={({ target }) => onLetterSpacingChange(target.value)}/>
        </label>
      </div>
    );
  }
}

class Text extends Component {
  render() {

    const { outputText, fontSize, letterSpacing } = this.props;

    return (
      <div>
        <div>
          <label>
            <span style={{ fontSize:fontSize + 'px', letterSpacing:letterSpacing + 'px' }}>{outputText}</span>
          </label>
        </div>

      </div>
    );
  }
}

export default App;
