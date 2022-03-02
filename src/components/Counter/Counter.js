import { Component } from 'react';
import { connect } from 'react-redux';

import styles from './Counter.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';

class Counter extends Component {
  incrementHandler() {
    this.props.increment();
  }

  decrementHandler() {
    this.props.decrement();
  }

  render() {
    return (
      <main>
        <Card className={styles.counter}>
          <h1 className={styles['counter__title']}>REDUX COUNTER</h1>
          <div className={styles['counter__value']}>{this.props.counter}</div>
          <div className={styles['counter__actions']}>
            <Button
              className={styles['counter__button']}
              onClick={this.decrementHandler.bind(this)}
            >
              -
            </Button>
            <Button
              className={styles['counter__button']}
              onClick={this.incrementHandler.bind(this)}
            >
              +
            </Button>
          </div>
        </Card>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: 'increment' }),
    decrement: () => dispatch({ type: 'decrement' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
