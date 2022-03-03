import { useSelector, useDispatch } from 'react-redux';

import { counterActions } from '../../store/counter-slice';
import styles from './Counter.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const decreaseHandler = () => {
    dispatch(counterActions.decrease(5));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main>
      <Card className={styles.counter}>
        <h1 className={styles['counter__title']}>REDUX COUNTER</h1>
        {show && <div className={styles['counter__value']}>{counter}</div>}
        <div className={styles['counter__actions']}>
          <Button
            className={styles['counter__button']}
            onClick={decreaseHandler}
          >
            -5
          </Button>
          <Button
            className={styles['counter__button']}
            onClick={decrementHandler}
          >
            -
          </Button>

          <Button
            className={styles['counter__button']}
            onClick={incrementHandler}
          >
            +
          </Button>
          <Button
            className={styles['counter__button']}
            onClick={increaseHandler}
          >
            +5
          </Button>
        </div>
        <Button
          className={styles['counter__button']}
          onClick={toggleCounterHandler}
        >
          Toggle Counter
        </Button>
      </Card>
    </main>
  );
};

export default Counter;
