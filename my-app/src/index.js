import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';
// import 'bootstrap/dist/css/bootstrap.min.css';
//import $ from 'jquery';
//import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from './App';
// import RootProvider from './provider';
// import FullApp from './FullApp/index';

import MyApp from './FullAppUi/MTRRFirestore';
import RootProvider from './root/provider';
import FullAppUi from './FullAppUi/index';

ReactDOM.render(

  // <FullAppUi/>
  <RootProvider>
    <App/>
  </RootProvider>
  

  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
