import React from 'react';
import {Router,Route,hashHistory,browserHistory,IndexRoute} from 'react-router';

import App from './App';
import Home from './Home/Home';
import Work from './Work/Work';
import About from './About/About';
import Blog from './Blog/Blog';
import Item from './Item/Item';

class Routers extends React.Component {
  render () {
    return(
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={Home}/>
          <Route path='/work' component={Work}/>
          <Route path='/about' component={About}/>
          <Route path='/blog' component={Blog}/>
          <Route path='/item/:url' component={Item}/>
        </Route>
      </Router>
    )
  }
}

export default Routers;
