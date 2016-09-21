import React from 'react';
import { Link } from 'react-router';

class NavLeft extends React.Component {
  render () {
    return(
      <div className="nav-left">
        <h3>SuMengYing@HOME</h3>
        <Link activeStyle={{color:'#567'}} onlyActiveOnIndex={true} to="/"><span className="glyphicon glyphicon-home"></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Home</Link>
        <Link activeStyle={{color:'#567'}} to="/work"><span className="glyphicon glyphicon-book"></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Work</Link>
        <Link activeStyle={{color:'#567'}} to="/blog"><span className="glyphicon glyphicon-bookmark"></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Blog</Link>
        <Link activeStyle={{color:'#567'}} to="/about"><span className="glyphicon glyphicon-user"></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;About</Link>
      </div>
    )
  }
}

export default NavLeft;
