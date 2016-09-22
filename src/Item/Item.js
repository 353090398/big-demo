import React from 'react';

class Item extends React.Component {
  render () {
    return(
      <div>
        {this.props.params.url}
      </div>
    )
  }
}

export default Item;
