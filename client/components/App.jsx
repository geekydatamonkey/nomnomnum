import React from 'react';
import { ReactMeteorData } from 'meteor/react-meteor-data';
import { Counters } from '../../both/collections.js';
import CounterButton from './CounterButton.jsx';

const App = React.createClass({
  mixins: [ReactMeteorData],

  // getInitialState() {},

  // Loads items and puts them on this.data.tasks
  getMeteorData() {
    return {
      counters: Counters.find().fetch(),
    };
  },

  incrementCount(counter) {
    Counters.update(counter._id, {
      $inc: { currentCount: 1 },
    });
  },

  decrementCount(counter) {
    Counters.update(counter._id, {
      $inc: { currentCount: -1 },
    });
  },

  resetCount(counter) {
    Counters.update(counter._id, {
      $set: { currentCount: 0 },
    });
  },

  renderCounters() {
    return this.data.counters.map((counter) => (
      <CounterButton
        key={counter._id}
        counter={counter}
        handleIncrement={this.incrementCount}
        handleDecrement={this.decrementCount}
        handleReset={this.resetCount}
      />
    ));
  },

  render() {
    return (
      <div className="container">
        <header>
          <h1>Nom Nom Num</h1>
        </header>
        <main>
          <h2>Food Tracker</h2>
          { this.renderCounters() }
        </main>
        <footer>
        </footer>
      </div>
    );
  },
});

export default App;
