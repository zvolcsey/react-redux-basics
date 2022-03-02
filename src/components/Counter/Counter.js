import { useSelector, useDispatch } from 'react-redux';

import styles from './Counter.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const incrementHandler = () => {
    dispatch({ type: 'increment' });
  };

  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  };

  return (
    <main>
      <Card className={styles.counter}>
        <h1 className={styles['counter__title']}>REDUX COUNTER</h1>
        <div className={styles['counter__value']}>{counter}</div>
        <div className={styles['counter__actions']}>
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
        </div>
        <Button className={styles['counter__button']}>Toggle Counter</Button>
      </Card>
    </main>
  );
};

export default Counter;
