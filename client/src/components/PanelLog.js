import React, { Component } from 'react';

class PanelLog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: []
    };
  };
  loadData() {
    fetch("accesslog")
      .then(response => response.json())
      .then(json => {
        this.setState({ data: json, loading: false });
        // console.log(json);
      });
  };
  componentDidMount(){
    this.loadData();
  };
  render() {
    console.log('render access log panel!');
    if(this.state.loading === true) {
      return (
        <section className="panel">
          <div className="container">
            <div className="loading-spinner">
              <p className="loader">Loading Data...</p>
            </div>
          </div>
        </section>
      );
    } else {
      var logdata = this.state.data;
      return (
          <section className="panel">
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
      );
    }
  }
}

export default PanelLog;
