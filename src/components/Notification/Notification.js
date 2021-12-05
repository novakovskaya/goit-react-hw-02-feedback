import PropTypes from "prop-types";
import styles from "./Notification.module.scss";

const Notification = ({ message }) => {
  return <h2 className={styles.Message}>{message}</h2>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
