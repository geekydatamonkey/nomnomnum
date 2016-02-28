import React from 'react';
import { ReactMeteorData } from 'meteor/react-meteor-data';

const App = React.createClass({
  mixins: [ReactMeteorData],

  // getInitialState() {},

  // Loads items and puts them on this.data.tasks
  getMeteorData() {
    return {
      veggies: {
        currentCount: 0,
        recommendedCount: 5,
      },
    };
  },

  render() {
    return (
      <div className="container">
        <header>
          <h1>Nom Nom Num</h1>
        </header>
        <main>
          <h2>Food Tracker</h2>
          <ul>
            <li>
              <h3>Veggies</h3>
              <p>{ this.data.veggies.currentCount } / { this.data.veggies.recommendedCount }</p>
            </li>
          </ul>
        </main>
        <footer>
        </footer>
      </div>
    );
  },
});

export default App;
