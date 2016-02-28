import React from 'react';

export default React.createClass({
  propTypes: {
    counter: React.PropTypes.object.isRequired,
    handleIncrement: React.PropTypes.func,
    handleDecrement: React.PropTypes.func,
    handleReset: React.PropTypes.func,
  },

  handleIncrement() {
    if (!this.props.handleIncrement) {
      throw new Error(`no prop handleIncrement on counter '${this.props.counter.name}'`);
    }
    this.props.handleIncrement(this.props.counter);
  },

  handleDecrement() {
    if (!this.props.handleDecrement) {
      throw new Error(`no prop handleDecrement on counter '${this.props.counter.name}'`);
    }
    this.props.handleDecrement(this.props.counter);
  },

  handleReset() {
    if (!this.props.handleReset) {
      throw new Error(`no prop handleReset on counter '${this.props.counter.name}'`);
    }
    this.props.handleReset(this.props.counter);
  },

  render() {
    const {
      name,
      currentCount,
      recommendedCount,
    } = this.props.counter;

    return (
      <div className="counter-button">
        <h3 onClick={ this.handleIncrement }>{ name }</h3>
        <p onClick={ this.handleIncrement }>{currentCount} / {recommendedCount}</p>
        <ul className="counter-button__actions">
          <li><a className="btn" onClick={this.handleIncrement}>+</a></li>
          <li><a className="btn" onClick={this.handleDecrement}>-</a></li>
          <li><a className="btn" onClick={this.handleReset}>Reset</a></li>
        </ul>
      </div>
    );
  },
});
