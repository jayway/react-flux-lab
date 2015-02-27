'use strict';

var React = require('react');

var TodoList = require('./todolist');
var Controls = require('./controls'); 

module.exports = React.createClass({ 
  displayName: 'Main', 
  render: function () { return (
      <main role="main">
        <TodoList></TodoList>
        <Controls></Controls>
      </main>
    );
  }
});
