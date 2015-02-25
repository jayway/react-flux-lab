# React Flux

A lab on the Flux architecture, using React.

## Usage

```bash
npm install
npm start
```

## Objective

Using Facebook's [Flux](http://facebook.github.io/flux/docs/overview.html) architecture, implement two or more unrelated components (i.e. lacking parent-child relationship) that affect each other's state.

You can either write your own dispatcher or use the one that is [provided to you](https://www.npmjs.com/package/flux).

### Suggestions

* **Deathmatch:** Press a button to damage the opponent. The opponent hits you back. When health reaches zero the opponent wins. Damage inflicted can be a random value from a six-sided dice (or `d6` for you D&D nerds).
* **Todo list:** The classic. Press a button to add a list item that has editable text. An optional feature can be the ability to toggle TODOs as completed.
* **Web shop:** Present a catalog of items, where each item has an "Add to Cart" button. Pressing the button adds the item to the shopping cart.

## Documentation

* [Flux](http://facebook.github.io/flux/docs/overview.html) ([source](https://github.com/facebook/flux/blob/master/src/Dispatcher.js))
* [React](http://facebook.github.io/react/)
* [Tutorial](http://facebook.github.io/flux/docs/todo-list.html)

