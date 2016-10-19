import React from 'react';
import { Link } from 'react-router';

class NavLeft extends React.Component {
  constructor(){
    super();
    title:'Home'
  }
  componentWillReceiveProps(){
    this.setTitle();
  }
  componentWillMount(){
    this.setTitle();
  }
  setTitle(){
    this.setState({
      title:  this.context.router.isActive('/',true) ? 'Home' :
              this.context.router.isActive('/blog') ? 'Blog' :
              this.context.router.isActive('/work') ? 'Work' :
              this.context.router.isActive('/about') ? 'About' : 'Item'
    })
  }
  render () {
    let styles={
      span:{
        color: 'rgb(0, 188, 212)'
      }
    }
    return(
      <div className="nav-left">
        <h3><span style={styles.span}>Kira@</span>{this.state.title}</h3>
        <Link activeStyle={{color:'#00bcd4'}} onlyActiveOnIndex={true} to="/"><span className="glyphicon glyphicon-home"></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Home</Link>
        <Link activeStyle={{color:'#00bcd4'}} to="/work"><span className="glyphicon glyphicon-book"></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Work</Link>
        <Link activeStyle={{color:'#00bcd4'}} to="/blog"><span className="glyphicon glyphicon-bookmark"></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Blog</Link>
        <Link activeStyle={{color:'#00bcd4'}} to="/about"><span className="glyphicon glyphicon-user"></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;About</Link>
      </div>
    )
  }
}
NavLeft.contextTypes = {
  router: React.PropTypes.object.isRequired
}
export default NavLeft;
