'use strict';

var React = require('react');
var Cart = require('./cart');

module.exports = React.createClass({
  displayName: 'Header',
  render: function () {
    return (
      <header className="header" role="banner">
        <h1><a href="#">{this.props.title}</a></h1>
        <Cart />
      </header>
    );
  }
});
