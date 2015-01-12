'use strict';

var EventEmitter = require('events').EventEmitter;
var _ = require('underscore');
var ShopDispatcher = require('../dispatcher/ShopDispatcher');
var ShopActions = require('../constants/ShopActions');

var CHANGE_EVENT = 'change';

var ShopStore = _.extend({}, EventEmitter.prototype, {
  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },
  getShopItems: function () {
    return shopItems;
  },
  getCartItems: function () {
    return cartItems;
  }
});

var shopItems = [
  {
    id: 0,
    name: 'Pile o\' Books',
    image: '📚'
  },
  {
    id: 1,
    name: 'Shaved Dice',
    image: '🎲'
  },
  {
    id: 2,
    name: 'Space Invader',
    image: '👾'
  }
];

var cartItems = [];

function addItem(item) {
  cartItems.push(item);
}

function removeItem(id) {
  cartItems = _.without(cartItems, _.findWhere(cartItems, {id: id}));
}

ShopDispatcher.register(function (action) {
  switch (action.type) {
    case ShopActions.ADD_TO_CART:
      addItem(action.item);
      ShopStore.emitChange();
      break;
    case ShopActions.REMOVE_FROM_CART:
      removeItem(action.id);
      ShopStore.emitChange();
      break;
    default:
      break;
  }
});

module.exports = ShopStore;

