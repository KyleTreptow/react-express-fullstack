import React, { Component } from 'react';
import logo from './logo.svg';
import './stylesheets/app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  loadData() {
    fetch("api")
      .then(response => response.json())
      .then(json => {
        this.setState({
          data: json
        });
        // console.log(json);
      });
  };
  componentDidMount(){
    this.loadData();
  };
  render() {
    var logdata = this.state.data;
    console.log('render!');
    return (
      <div className="app">
        {/* Header Component */}
        <div className="app-header">
          <div className="container">
            <img src={logo} className="app-logo" alt="logo" />
            <h2>Kyle's Fullstack Project
              <small>Express + React</small>
            </h2>
          </div>
        </div>
        {/* Content Component */}
        <section className="content-section">
          <div className="container">
            <p className="app-intro">
              Render data from the api here (pulling from Express API):
            </p>
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <td>Log Date</td>
                    <td>Log ID</td>
                  </tr>
                </thead>
                <tbody>
                {logdata.map(function(data, i){
                  return(<tr key={i}><td>{data.date}</td><td> {data._id}</td></tr>);
                })}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
