import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import App from './components/App.jsx';

Meteor.startup(() => {
  console.log('hello world');
  ReactDOM.render(<App />, document.getElementById('render-target'));
});
