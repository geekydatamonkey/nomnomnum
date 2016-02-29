import React, { PropTypes } from 'react';

const AppBar = ({ title }) => (
  <header className="app-bar">
      <h1>{title} <i className="fa fa-spoon"></i> </h1>
  </header>
);

AppBar.propTypes = {
  title: PropTypes.string,
};

export default AppBar;
