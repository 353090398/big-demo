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
            <img src="http://odowb0dhc.bkt.clouddn.com/529abd7c48d5b91c39299382.jpg" />
          </a>
          <div className="work-text">
            <h1>作品一</h1>
            <p>2016.10.1</p>
          </div>
        </div>
        <div className="work-card">
          <a href="http://github.com/353090398">
            <img src="http://odowb0dhc.bkt.clouddn.com/52eec21948d5b95d8333dcd8.jpg" />
          </a>
          <div className="work-text">
            <h1>作品二</h1>
            <p>2016.10.2</p>
          </div>
        </div>
        <div className="work-card">
          <a href="http://github.com/353090398">
            <img src="http://odowb0dhc.bkt.clouddn.com/5350a90248d5b90464a89219.jpg" />
          </a>
          <div className="work-text">
            <h1>作品三</h1>
            <p>2016.10.3</p>
          </div>
        </div>
        <div className="work-card">
          <a href="http://github.com/353090398">
            <img src="http://odowb0dhc.bkt.clouddn.com/5242B4C0D03590936B36EA86AA295E08.jpg" />
          </a>
          <div className="work-text">
            <h1>作品四</h1>
            <p>2016.10.4</p>
          </div>
        </div>
        <div className="work-card">
          <a href="http://github.com/353090398">
            <img src="http://odowb0dhc.bkt.clouddn.com/5350a92948d5b9047267f1c7.jpg" />
          </a>
          <div className="work-text">
            <h1>作品五</h1>
            <p>2016.10.5</p>
          </div>
        </div>
        <div className="work-card">
          <a href="http://github.com/353090398">
            <img src="http://odowb0dhc.bkt.clouddn.com/52a02f8a48d5b955fcd86d39.jpg" />
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
