import React from 'react';
import {render} from 'react-dom';

import Routers from './Routers.js';
import App from './App.js';
import 'bootstrap/dist/css/bootstrap.min.css'
import './main.css';

render(<Routers />,document.getElementById('root'));
