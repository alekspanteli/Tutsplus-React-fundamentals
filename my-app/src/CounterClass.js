import {Component} from 'react';

class Counter extends Component {
  static defaultProps = {
    startAt: 0,
    countBy: 1,
  };

  constructor(props) {
    super(props);

    this.state = {
      counter: props.startAt,
    };

    this.CountUp = this.CountUp.bind(this);
    this.CountDown = this.CountDown.bind(this);
  }

  CountUp(e) {
    this.setState({counter: this.state.counter + this.props.countBy})
    
  }

  CountDown(e) {
    this.setState({counter: this.state.counter - this.props.countBy})
  }

  render() {
    return (
      <>
        <p>Start at: {this.props.startAt}</p>
        <p>Count By: {this.props.countBy}</p>
        <h4>{this.state.counter}</h4>
        <div className="d-flex gap-1">
          <button className="btn btn-primary" onClick={this.CountUp}>Count Up</button>
          <button className="btn btn-danger" onClick={this.CountDown}>Count Down</button>
        </div>
      </>
    );
  }
}


export default Counter;