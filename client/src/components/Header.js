import React, { Component } from 'react';
import logo from '../logo.svg';

class AppHeader extends Component {
  render() {
    console.log('render header!');
    return (
        <div className="app-header">
          <div className="container">
            <img src={logo} className="app-logo" alt="logo" />
            <h1 id="app-title">Kyle's Fullstack Project
              <small>Express + React</small>
            </h1>
          </div>
          <nav id="app-navi">
            <ul className="list-inline">
              <li><button className="btn-default" onClick={() => { this.props.changePanel('Home') }} >Home</button></li>
              <li><button className="btn-default" onClick={() => { this.props.changePanel('Blog') }} >Blog</button></li>
              <li><button className="btn-default" onClick={() => { this.props.changePanel('Access Log') }} >Access Log</button></li>
              <li><button className="btn-default" onClick={() => { this.props.changePanel('Misc.') }} >Misc.</button></li>
            </ul>
          </nav>
        </div>
    );
  }
}

export default AppHeader;
