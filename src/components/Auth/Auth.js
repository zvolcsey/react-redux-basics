import Card from '../UI/Card';
import PrimaryButton from '../UI/PrimaryButton';
import styles from './Auth.module.css';

const Auth = () => {
  const submitFormHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={styles['auth']}>
      <form onSubmit={submitFormHandler}>
        <div className={styles['form-control']}>
          <label htmlFor='username'>Username</label>
          <input type='text' id='username' />
        </div>
        <div className={styles['form-control']}>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' />
        </div>
        <PrimaryButton className={styles['form__button']}>Login</PrimaryButton>
      </form>
    </Card>
  );
};

export default Auth;
