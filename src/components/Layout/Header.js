import SecondaryButton from '../UI/SecondaryButton';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles['main-header']}>
      <h1>Redux Auth</h1>
      <nav className={styles['main-nav']}>
        <ul className={styles['main-nav__list']}>
          <li className={styles['main-nav__item']}>My Products</li>
          <li className={styles['main-nav__item']}>My Sales</li>
          <li>
            <SecondaryButton>Logout</SecondaryButton>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
