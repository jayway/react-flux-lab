'use strict';

var React = require('react');
var Shop = require('./shop');

module.exports = React.createClass({
  displayName: 'Main',
  render: function () {
    return (
      <main role="main">
        <Shop />
      </main>
    );
  }
});
