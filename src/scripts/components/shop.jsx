'use strict';

var React = require('react');
var Item = require('./item');
var ShopStore = require('../stores/ShopStore');

module.exports = React.createClass({
  displayName: 'Shop',
  getInitialState: function () {
    return {
      items: ShopStore.getShopItems()
    };
  },
  render: function () {
    var items = this.state.items.map(function (item) {
      return (
        <Item key={item.id} item={item} />
      );
    });
    return (
      <div className="shop">
        {items}
      </div>
    );
  }
});

