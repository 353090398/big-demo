import React from 'react';

class Home extends React.Component {
  render () {
    return(
      <div className="home-container">
        <div className="home-cover">
          <div className="home-item">
            <h2>Hi I'm <span>SuMengYing</span></h2>
            <p>WEB DEVELOPER</p>
            <button className="home-btn"><a href="https://github.com/353090398">HIRE ME</a></button>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
