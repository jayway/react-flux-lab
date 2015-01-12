'use strict';

var React = require('react');
var ShopActionCreator = require('../actions/ShopActionCreator.js');

module.exports = React.createClass({
  displayName: 'Item',
  propTypes: {
    item: React.PropTypes.object.isRequired
  },
  handleClick: function () {
    ShopActionCreator.addToCart(this.props.item);
  },
  render: function () {
    return (
      <div className="item">
        <figure>
          <span className="image">{this.props.item.image}</span>
          <figcaption>{this.props.item.name}</figcaption>
        </figure>
        <button onClick={this.handleClick}>Add to cart</button>
      </div>
    );
  }
});

