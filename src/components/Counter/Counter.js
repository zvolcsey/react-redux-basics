import styles from './Counter.module.css';
import Card from '../UI/Card';

const Counter = () => {
  return (
    <Card className={styles.counter}>
      <p className={styles['counter__title']}>REDUX COUNTER</p>
      <p className={styles['counter__value']}>-- COUNTER VALUE --</p>
      <button>Toggle Counter</button>
    </Card>
  );
};

export default Counter;
