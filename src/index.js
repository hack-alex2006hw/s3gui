import React from 'react';
import ReactDOM from 'react-dom';


import App from './App';
import './index.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/css/bootstrap-theme.min.css';

var path = document.location.pathname;
// var dir = path.substring(path.indexOf('/', 1)+1, path.lastIndexOf('/'));

console.log('directory: ', path)
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
