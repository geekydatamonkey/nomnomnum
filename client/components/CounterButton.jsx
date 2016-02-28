import React from 'react';

export default React.createClass({
  propTypes: {
    counter: React.PropTypes.object.isRequired,
  },

  handleClick() {
    console.log(`clicked ${this.props.counter.name}`);
  },

  render() {
    const {
      name,
      currentCount,
      recommendedCount,
    } = this.props.counter;

    return (
      <div className="counter-button" onClick={ this.handleClick }>
        <h3>{ name }</h3>
        <p>{currentCount} / {recommendedCount}</p>
      </div>
    );
  },
});
