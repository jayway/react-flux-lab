'use strict';

var React = require('react');
var TodoStore = require('../stores/todostore');

module.exports = React.createClass({
  displayName: 'TodoList',
  _onChange: function(){
    this.setState(TodoStore.getAll());
  },
  getInitialState: function(){
    return TodoStore.getAll();
  },
  componentDidMount: function() {
    TodoStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    TodoStore.removeChangeListener(this._onChange);
  },
  render: function () {

    var items = this.state.items.map(function(item){
      return (
        <li>{ item.name  }</li>
      );
    });

    return (
      <ul>{ items }</ul>
    );
  }
});
