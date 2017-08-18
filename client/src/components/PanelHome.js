import React, { Component } from 'react';

class PanelHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: []
    };
  };
  loadData() {
    fetch("blog")
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
              <h2>Make a Blog Post</h2>
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <td>Blog Date</td>
                      <td>Blog ID</td>
                      <td>Blog Title</td>
                      <td>Blog Content</td>
                    </tr>
                  </thead>
                  <tbody>
                  {logdata.map(function(data, i){
                    return(
                      <tr key={i}>
                        <td>{data.date}</td>
                        <td>{data._id}</td>
                        <td>{data.title}</td>
                        <td>{data.content}</td>
                      </tr>
                    );
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

export default PanelHome;
