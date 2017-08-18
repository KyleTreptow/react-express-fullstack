import React, { Component } from 'react';

import PanelHome from './PanelHome';
import PanelBlog from './PanelBlog';
import PanelLog from './PanelLog';
import PanelMisc from './PanelMisc';


class AppPanel extends Component {
  render() {
    if(this.props.panel === 'Home'){
      return <PanelHome></PanelHome>;
    } else if (this.props.panel === 'Blog'){
      return <PanelBlog changePanel={this.props.changePanel}></PanelBlog>;
    } else if (this.props.panel === 'Access Log'){
      return <PanelLog></PanelLog>;
    } else if (this.props.panel === 'Misc.'){
      return <PanelMisc></PanelMisc>;
    }

  }
}

export default AppPanel;
