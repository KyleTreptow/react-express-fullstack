import React, { Component } from 'react';

class PanelMisc extends Component {
  render() {
    console.log('render misc. panel!');
    return (
        <section className="panel">
          <div className="container">
            <h2>Panel: Misc. Panel</h2>
            <div className="well">
              <p>Add more stuff here!</p>
            </div>
          </div>
        </section>
    );
  }
}

export default PanelMisc;
