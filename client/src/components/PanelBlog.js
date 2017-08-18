import React, { Component } from 'react';

class PanelBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(' Submit Title: '+this.state.title+', Submit Content: '+this.state.content);

  };
  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };
  render() {
    console.log('render blog panel!');
    return (
        <section className="panel">
          <div className="container">
            <h2>Panel: Blog Panel</h2>
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-sm-offset-3">
                <div className="well form-well">
                  <form onSubmit={this.handleSubmit} >
                    <div className="form-group">
                      <label htmlFor="form-title">Blog Title</label>
                      <input
                        type="text"
                        className="form-control"
                        id="form-title"
                        name="title"
                        placeholder="Enter Title"
                        value={this.state.title}
                        onChange={this.handleChange}  />
                    </div>
                    <div className="form-group">
                      <label htmlFor="form-content">Blog Content</label>
                      <textarea
                        className="form-control"
                        id="form-content"
                        name="content"
                        placeholder="Enter Content"
                        value={this.state.content}
                        onChange={this.handleChange} />
                    </div>
                    <button type="submit" className="btn-default">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
    );

  }
}

export default PanelBlog;
