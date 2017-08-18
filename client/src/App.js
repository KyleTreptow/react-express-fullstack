import React, { Component } from 'react';
import AppHeader from './components/Header';
import AppPanel from './components/Panel';
import './stylesheets/app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panel: 'Home'
    };
    this.changePanel = this.changePanel.bind(this)
  };
  changePanel(panel){
    console.log('Change Panel: '+panel);
    this.setState({ panel: panel });
  };
  render() {
    console.log('render app!');
    return (
      <div className="app">
        <AppHeader changePanel={this.changePanel}></AppHeader>
        <section className="content-section">
          <AppPanel panel={this.state.panel} changePanel={this.changePanel} ></AppPanel>
        </section>
      </div>
    );
  }
}

export default App;
