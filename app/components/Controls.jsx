var React = require('React');

var Controls = React.createClass({
  propTypes: {
    countDownStatus: React.PropTypes.string.isRequired
  },
  render: function () {
    var {countDownStatus} = this.props;

    // Check the status of the clock and render button accordingly

    var renderStartStopButton = () => {
      if (countDownStatus === 'started') {
        return <button className="button secondary">Pause</button>
      }
      else if (countDownStatus === 'paused') {
        return <button className="button primary">Start</button>
      }
    };

    return (
      <div className="controls">
        {renderStartStopButton()}
        <button className="button alert hollow">Clear</button>
      </div>
    )
  }
});

module.exports = Controls;
