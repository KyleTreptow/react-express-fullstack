import React, { Component } from 'react';

class PanelHome extends Component {
  render() {
    console.log('render home panel!');
    return (
        <section className="panel">
          <div className="container">
            <h2>Panel: Home Panel</h2>
            <p>Home Page Content Here...</p>
          </div>
        </section>
    );
  }
}

export default PanelHome;
