import React from 'react';

export default React.createClass({
  propTypes: {
    counter: React.PropTypes.object.isRequired,
    handleIncrement: React.PropTypes.func,
    handleDecrement: React.PropTypes.func,
    handleReset: React.PropTypes.func,
  },

  getClassNames() {
    const name = this.props.counter.name.toLowerCase();
    return [
      'counter-button',
      `counter-button__${name}`,
    ].join(' ');
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
      // .counter-button .counter-button__veg
      <div className={ this.getClassNames() }>
        <h3 className="counter-name" >{ name }</h3>
        <div className="count-container" onClick={ this.handleIncrement }>
          <span className="current-count">{currentCount}</span>
          <span className="recommended-count">/ {recommendedCount}</span>
        </div>
        <div className="actions">
          <a className="btn" onClick={this.handleReset}><i className="fa fa-undo"></i> Reset</a>
        </div>
      </div>
    );
  },
});
