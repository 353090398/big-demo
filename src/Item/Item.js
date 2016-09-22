import React from 'react';
import Marked from 'Marked';
import { getMd } from '../utils/helpers';

class Item extends React.Component {
  constructor(){
    super();
    this.state={
      data:[],
      wait:true
    }
  }
  componentDidMount(){
    getMd()
      .then( (recData) => {
        this.setState({
          data:recData.getMd,
          wait:false
        })
      })
  }
  render () {
    return(
      <div>
        {this.props.params.url}
      </div>
    )
  }
}

export default Item;
