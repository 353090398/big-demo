import React from 'react';
import {render} from 'react-dom';

import App from './App.js';
import 'bootstrap/dist/css/bootstrap.min.css'
import Routers from './Routers.js';
import 'highlight.js/styles/vs.css'
import './main.css';
import './post.css';

render(<Routers />,document.getElementById('root'));
