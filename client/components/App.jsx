import React from 'react';
import { ReactMeteorData } from 'meteor/react-meteor-data';
import CounterButton from './CounterButton.jsx';

const counters = [
  {
    _id: 1,
    name: 'Veggies',
    currentCount: 0,
    recommendedCount: 10,
  },
  {
    _id: 2,
    name: 'Fruits',
    currentCount: 0,
    recommendedCount: 10,
  },
];

const App = React.createClass({
  mixins: [ReactMeteorData],

  // getInitialState() {},

  // Loads items and puts them on this.data.tasks
  getMeteorData() {
    return { counters: this.getCounters() };
  },

  getCounters() {
    return counters;
  },

  renderCounters() {
    return this.data.counters.map((counter) => (
      <CounterButton key={counter._id} counter={counter} />
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
