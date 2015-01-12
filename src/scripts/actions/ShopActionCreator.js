'use strict';

var ShopDispatcher = require('../dispatcher/ShopDispatcher');
var ShopActions = require('../constants/ShopActions');

module.exports = {
  addToCart: function (item) {
    ShopDispatcher.dispatch({
      type: ShopActions.ADD_TO_CART,
      item: item
    });
  },
  removeFromCart: function (id) {
    ShopDispatcher.dispatch({
      type: ShopActions.REMOVE_FROM_CART,
      id: id
    });
  }
};

