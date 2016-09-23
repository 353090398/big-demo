import React from 'react';
import BlogCards from '../components/BlogCards';
import { getJson } from '../utils/helpers';

class Blog extends React.Component {
  constructor(){
    super();
    this.state={
      data:[],
      wait:true
    }
  }
  componentDidMount(){
    getJson()
      .then( (recData) => {
        this.setState({
          data:recData.getJson,
          wait:false
        })
      })
  }
  render () {
    return(
      <div style={{width:'100%',marginTop:'20px'}}>
        { this.state.wait ? 'please wait a minute...' : this.state.data.map( (item,i) => <BlogCards {...item} key={i}/> ) }
      </div>
    )
  }
}

export default Blog;
