import { useSelector, useDispatch } from 'react-redux';

import { authActions } from '../../store/auth-slice';
import SecondaryButton from '../UI/SecondaryButton';
import styles from './Header.module.css';

const Header = () => {
  const dispatch = useDispatch();

  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <header className={styles['main-header']}>
      <h1>Redux Auth</h1>
      {isAuth && (
        <nav className={styles['main-nav']}>
          <ul className={styles['main-nav__list']}>
            <li className={styles['main-nav__item']}>My Products</li>
            <li className={styles['main-nav__item']}>My Sales</li>
            <li>
              <SecondaryButton onClick={logoutHandler}>Logout</SecondaryButton>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
