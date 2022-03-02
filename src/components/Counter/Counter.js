import { useSelector, useDispatch } from 'react-redux';

import styles from './Counter.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);

  const incrementHandler = () => {
    dispatch({ type: 'increment' });
  };

  const increaseHandler = () => {
    dispatch({ type: 'increase', amount: 5 });
  };

  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  };

  const decreaseHandler = () => {
    dispatch({ type: 'decrease', amount: 5 });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: 'toggle' });
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
