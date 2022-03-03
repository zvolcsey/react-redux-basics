import Button from './Button';
import styles from './PrimaryButton.module.css';

const PrimaryButton = (props) => {
  return (
    <Button
      className={`${styles['primary-button']} ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
};

export default PrimaryButton;
