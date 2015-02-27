'use strict';

var React = require('react');
var TodoActionCreator = require('../actions/todoactioncreator');

module.exports = React.createClass({
  displayName: 'Controls',
  addItem: function(){
    TodoActionCreator.addItem({name: this.refs.name.getDOMNode().value});
  },
  render: function () {

    return (
      <div>
        <input type="text" ref="name"  placeholder="Name" />
        <button onClick={this.addItem}>Add item</button>
      </div>
    );
  }
});
