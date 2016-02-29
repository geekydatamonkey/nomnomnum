import React from 'react';
import CounterList from './CounterList.jsx';
import AppBar from './AppBar.jsx';

const App = React.createClass({

  render() {
    return (
      <div className="app-container">
        <AppBar title="Nom Nom Num" />
        <CounterList />
      </div>
    );
  },
});

export default App;
