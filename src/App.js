import { useSelector } from 'react-redux';

import Counter from './components/Counter/Counter';
import Header from './components/Layout/Header';
import Auth from './components/Auth/Auth';
import UserProfile from './components/User/UserProfile';

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      <Header />
      {!isAuthenticated && <Auth />}
      {isAuthenticated && <UserProfile />}
      {isAuthenticated && <Counter />}
    </>
  );
};

export default App;
