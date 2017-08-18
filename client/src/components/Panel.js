import React, { Component } from 'react';

import PanelHome from './PanelHome';
import PanelBlog from './PanelBlog';
import PanelLog from './PanelLog';
import PanelMisc from './PanelMisc';


class AppPanel extends Component {
  render() {
    console.log('render header!');
    if(this.props.panel === 'Home'){
      return <PanelHome></PanelHome>;
    } else if (this.props.panel === 'Blog'){
      return <PanelBlog></PanelBlog>;
    } else if (this.props.panel === 'Access Log'){
      return <PanelLog></PanelLog>;
    } else if (this.props.panel === 'Misc.'){
      return <PanelMisc></PanelMisc>;
    }

  }
}

export default AppPanel;
