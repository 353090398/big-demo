import React from 'react';
import NavHeader from './components/NavHeader';
import NavFooter from './components/NavFooter';
import NavLeft from './components/NavLeft';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      showNav:false
    }
  }
  setNavBar(){
    this.setState({showNav:window.innerWidth > 760 ? true : false})
  }
  componentDidMount(){
    this.setNavBar();
    window.onresize = this.setNavBar.bind(this);
  }
  render () {
    return(
      <div className="content-wrap">
        {this.state.showNav ? <NavLeft /> : <NavHeader /> }
        <div className="content-main">
          {this.props.children}
        </div>
        {this.state.showNav ? true : <NavFooter/> }
      </div>
    )
  }
}

export default App;
