'use strict';

var React = require('react');

module.exports = React.createClass({
  displayName: 'Header',
  render: function () {
    return (
      <header className="header" role="banner">
        <h1><a href="#">{this.props.title}</a></h1>
      </header>
    );
  }
});
