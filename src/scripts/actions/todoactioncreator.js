'use strict';

var TodoDispather = require('../dispatcher/tododispatcher');

module.exports = {
  addItem: function(item){
    console.log("In actions creator");
    TodoDispather.dispatch({
      type: 'ADD_ITEM',
      item: item
    });
  }
}
