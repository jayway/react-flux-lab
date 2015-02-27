'use strict';

var React = require('react');
var Header = require('./components/header');
var Main = require('./components/main');

React.render(
  <div className="page-wrap">
    <Header title="TODOs" />
    <Main />
  </div>,
  document.querySelector('body')
);

