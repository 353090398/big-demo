import React from 'react';
import Img1 from '../images/2.jpg';
import Img2 from '../images/3.jpg';
import Img3 from '../images/4.jpg';
import Img4 from '../images/5.jpg';

class Work extends React.Component {
  render () {
    return(
      <div className="work-container">
        <div className="work-card">
          <a href="http://github.com/353090398">
            <img src={Img1} />
          </a>
          <div className="work-text">
            <h1>作品一</h1>
            <p>2016.10.1</p>
          </div>
        </div>
        <div className="work-card">
          <a href="http://github.com/353090398">
            <img src={Img1} />
          </a>
          <div className="work-text">
            <h1>作品二</h1>
            <p>2016.10.2</p>
          </div>
        </div>
        <div className="work-card">
          <a href="http://github.com/353090398">
            <img src={Img1} />
          </a>
          <div className="work-text">
            <h1>作品三</h1>
            <p>2016.10.3</p>
          </div>
        </div>
        <div className="work-card">
          <a href="http://github.com/353090398">
            <img src={Img1} />
          </a>
          <div className="work-text">
            <h1>作品四</h1>
            <p>2016.10.4</p>
          </div>
        </div>
        <div className="work-card">
          <a href="http://github.com/353090398">
            <img src={Img1} />
          </a>
          <div className="work-text">
            <h1>作品五</h1>
            <p>2016.10.5</p>
          </div>
        </div>
        <div className="work-card">
          <a href="http://github.com/353090398">
            <img src={Img1} />
          </a>
          <div className="work-text">
            <h1>作品六</h1>
            <p>2016.10.6</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Work;
