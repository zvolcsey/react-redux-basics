import Button from './Button';
import styles from './SecondaryButton.module.css';

const SecondaryButton = (props) => {
  return (
    <Button
      className={`${styles['secondary-button']} ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
};

export default SecondaryButton;
