var TodoDispatcher = require('../dispatcher/tododispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _todos = {items: [{name: 'Foo'}, {name: 'Bar'}] }; 

function add(item){
  _todos.items.push(item);
}

var TodoStore = assign({}, EventEmitter.prototype, {
  getAll: function() {
    return _todos;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
   this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

});

TodoDispatcher.register(function(action){
  console.log(action);

  add(action.item);
  TodoStore.emitChange();
});

module.exports = TodoStore;
