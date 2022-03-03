import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import { authActions } from '../../store/auth-slice';
import Card from '../UI/Card';
import PrimaryButton from '../UI/PrimaryButton';
import styles from './Auth.module.css';

const Auth = () => {
  const dispatch = useDispatch();

  const [usernameError, setUsernameError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const enteredUsernameRef = useRef();
  const enteredPasswordRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredUsername = enteredUsernameRef.current.value;
    const enteredPassword = enteredPasswordRef.current.value;

    if (
      enteredUsername.trim().length === 0 &&
      enteredPassword.trim().length === 0
    ) {
      setUsernameError('Username is required');
      setPasswordError('Password is required');
      enteredUsernameRef.current.value = '';
      enteredPasswordRef.current.value = '';
      return;
    }

    if (enteredUsername.trim().length === 0) {
      setUsernameError('Username is required');
      enteredUsernameRef.current.value = '';
      return;
    }
    setUsernameError(null);

    if (enteredPassword.trim().length === 0) {
      setPasswordError('Password is required');
      enteredPasswordRef.current.value = '';
      return;
    }
    setPasswordError(null);

    dispatch(authActions.login());

    enteredUsernameRef.current.value = '';
    enteredPasswordRef.current.value = '';
  };

  const usernameErrorMessage = usernameError && (
    <p
      className={`${styles['form-control__message']} ${styles['form-control__message--error']}`}
    >
      {usernameError}
    </p>
  );

  const passwordErrorMessage = passwordError && (
    <p
      className={`${styles['form-control__message']} ${styles['form-control__message--error']}`}
    >
      {passwordError}
    </p>
  );

  return (
    <Card className={styles['auth']}>
      <form onSubmit={submitFormHandler}>
        <div className={styles['form-control']}>
          <label htmlFor='username'>Username</label>
          {usernameErrorMessage}
          <input type='text' id='username' ref={enteredUsernameRef} />
        </div>
        <div className={styles['form-control']}>
          <label htmlFor='password'>Password</label>
          {passwordErrorMessage}
          <input type='password' id='password' ref={enteredPasswordRef} />
        </div>
        <PrimaryButton type='submit' className={styles['form__button']}>
          Login
        </PrimaryButton>
      </form>
    </Card>
  );
};

export default Auth;
