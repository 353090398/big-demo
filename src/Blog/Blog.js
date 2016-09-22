import React from 'react';
import BlogCards from '../components/BlogCards';

let data=[
  {index:1,title:'aaaaaa',desc:'akfhalkfhakslfhaskfjhsa',url:'a'},
  {index:2,title:'bbbbbb',desc:'akfhalkfhakslfhaskfjhsa',url:'b'},
  {index:3,title:'cccccc',desc:'akfhalkfhakslfhaskfjhsa',url:'c'},
  {index:4,title:'dddddd',desc:'akfhalkfhakslfhaskfjhsa',url:'d'}
]

class Blog extends React.Component {
  render () {
    return(
      <div style={{width:'100%',marginTop:'20px'}}>
        { data.map( (item,i) => <BlogCards {...item} key={i}/> ) }
      </div>
    )
  }
}

export default Blog;
