import React from 'react';

class NavHeader extends React.Component {
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
      title: this.context.router.isActive('/',true) ? 'Home' :
             this.context.router.isActive('/blog') ? 'Blog' :
             this.context.router.isActive('/work') ? 'Work' :
             this.context.router.isActive('/about') ? 'About' : 'Item'
    })
  }
  handleBack(){
    this.context.router.goBack();
  }
  render () {
    return(
      <div className="nav-header">
        <p className="glyphicon glyphicon-chevron-left" onClick={this.handleBack.bind(this)}>Back</p>
        <h3>{this.state.title}</h3>
        <p className="glyphicon glyphicon-search"></p>
      </div>
    )
  }
}
NavHeader.contextTypes = {
  router: React.PropTypes.object.isRequired
}
export default NavHeader;
