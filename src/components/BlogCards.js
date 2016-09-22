import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class BlogCards extends React.Component {
  render () {
    let styles={
      root:{
        width:'96%',
        boxShadow: '0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24)',
        borderRadius:'5px',
        margin:'0 auto',
        marginBottom:'20px',
      },
      index:{
        backgroundColor:'#256',
        height:'60px',
        textAlign:'center',
        borderRadius: '10px 10px 0 0',
        paddingTop:'10px'
      },
      num:{
        fontSize:'30px',
        margin:'0px auto',
        color:'#fff'
      },
      content:{
        padding:'16px',
        color:'#727272',
      },
      title:{
        fontSize:'18px',
        marginBottom:'20px'
      },
      desc:{
        fontSize:'16px',
        marginBottom:'20px'
      },
    }
    let address = `item/${this.props.url}`
    return(
      <div style={styles.root}>
        <div style={styles.index}><span style={styles.num}>{this.props.index}</span></div>
        <div style={styles.content}>
          <p style={styles.title}>{this.props.title}</p>
          <p style={styles.desc}>{this.props.desc}</p>
          <Link to={address} className="blog-btn">阅读更多</Link>
        </div>
      </div>
    )
  }
}
BlogCards.defaultProps={
  index:1,
  title:'我是标题',
  desc:'我是介绍',
}
BlogCards.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
};

export default BlogCards;
