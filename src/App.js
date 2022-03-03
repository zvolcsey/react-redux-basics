import { useSelector } from 'react-redux';

import Counter from './components/Counter/Counter';
import Header from './components/Layout/Header';
import Auth from './components/Auth/Auth';
import UserProfile from './components/User/UserProfile';

const App = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      {isAuth && <Counter />}
    </>
  );
};

export default App;
