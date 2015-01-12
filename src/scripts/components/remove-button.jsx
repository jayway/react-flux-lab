'use strict';

var React = require('react');
var ShopActions = require('../actions/ShopActionCreator');

module.exports = React.createClass({
  propTypes: {
    itemId: React.PropTypes.number.isRequired
  },
  handleOnRemoveItem: function () {
    ShopActions.removeFromCart(this.props.itemId);
  },
  render: function () {
    return (
      <button className="remove" onClick={this.handleOnRemoveItem}>X</button>
    );
  }
});
