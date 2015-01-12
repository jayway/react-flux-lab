'use strict';

var React = require('react');
var ShopStore = require('../stores/ShopStore');
var RemoveButton = require('./remove-button');

module.exports = React.createClass({
  displayName: 'Cart',
  getInitialState: function () {
    return {
      items: ShopStore.getCartItems()
    };
  },
  componentWillMount: function () {
    ShopStore.addChangeListener(this.onChange);
  },
  onChange: function () {
    this.setState({
      items: ShopStore.getCartItems()
    });
  },
  removeItem: function () {
  },
  render: function () {
    var items = this.state.items.map(function (item) {
      return (
        <span key={item.id} className="item">
          <RemoveButton itemId={item.id} />
          {item.image}
          {item.name}
        </span>
      );
    });
    return (
      <div className="cart">
        {items}
      </div>
    );
  }
});
