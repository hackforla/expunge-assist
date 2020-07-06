import React, { Component } from 'react';
import './main.css';
import Paragraph1 from "./Paragraph1.js";
import Collapsible from './Collapsible.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.PP1 = new Paragraph1();
  }

  render () {
    return (
      <div class="row">
        <div class="column">
          { this.PP1.render() }
          <Collapsible trigger="Paragraph 2">
            Since my last conviction...
          </Collapsible>
        </div>
        <div class="column">
          { this.PP1.assemble() }
        </div>
      </div>
    );
  }
}

export default App;
