import React from 'react';

class NavHeader extends React.Component {
  render () {
    return(
      <div className="nav-header">
        <span className="glyphicon glyphicon-chevron-left">Back</span>
        <h3>SuMengYing@HOME</h3>
        <span className="glyphicon glyphicon-search"></span>
      </div>
    )
  }
}

export default NavHeader;
