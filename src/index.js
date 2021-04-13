import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';
// import StateFullComponent from './container/HelloContainer';
// import Product from './container/Products/ProductContainer';
import Lifecyclecle from './container/Lifecycle/Lifecycle';


ReactDOM.render(
  <div>
  <p>Lifecycle</p>
    <hr/>
    <Lifecyclecle></Lifecyclecle>
  </div>
   ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
