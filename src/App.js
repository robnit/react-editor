import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      outputText: 'woof',
      fontSize: 64,
      letterSpacing: 12,
      offset: 0
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

  handleOffsetChange(value) {
    this.setState({ offset: value });
  }

  render() {
    const { outputText, fontSize, letterSpacing, offset } = this.state;

    return (
      <div>
        <Controls outputText={outputText}
          onTextChange={outputText => this.handleTextChange(outputText)}
          onFontSizeChange={fontSize => this.handleFontSizeChange(fontSize)}
          onLetterSpacingChange={letterSpacing => this.handleLetterSpacingChange(letterSpacing)}
          onOffsetChange={offset => this.handleOffsetChange(offset)}/>
        <Text outputText={outputText} fontSize={fontSize} letterSpacing={letterSpacing} paddingLeft={offset} />
      </div>
    );
  }

}

class Controls extends Component {
  render() {
    const { outputText, onTextChange, fontSize, onFontSizeChange, letterSpacing, onLetterSpacingChange, onOffsetChange } = this.props;

    return (
      <div>
        <label>
          Insert Text Here:
          <input name="outputText" value={outputText} 
            onChange={({ target }) => onTextChange(target.value)}/>
        </label>
        <label>
          Font Size:
          <input name="fontSize" value={fontSize} type="range" min="0" max="400" 
            onChange={({ target }) => onFontSizeChange(target.value)}/>
        </label>
        <label>
          Letter Spacing:
          <input name="letterSpacing" value={letterSpacing} type="range" min="-200" max="550" 
            onChange={({ target }) => onLetterSpacingChange(target.value)}/>
        </label>
        <label>
          Offset:
          <input name="offset" value={letterSpacing} type="range" min="0" max="100" 
            onChange={({ target }) => onOffsetChange(target.value)}/>
        </label>
      </div>
    );
  }
}

class Text extends Component {
  render() {

    const { outputText, fontSize, letterSpacing, paddingLeft } = this.props;

    return (
      <div>
        <div>
          <label>
            <span style={{ fontSize:fontSize + 'px', letterSpacing:letterSpacing + 'px', paddingLeft:paddingLeft + '%' }}>{outputText}</span>
          </label>
        </div>

      </div>
    );
  }
}

export default App;
