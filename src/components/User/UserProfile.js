import Card from '../UI/Card';
import styles from './UserProfile.module.css';

const UserProfile = () => {
  return (
    <main>
      <Card className={styles.profile}>
        <h2>My User Profile</h2>
      </Card>
    </main>
  );
};

export default UserProfile;
