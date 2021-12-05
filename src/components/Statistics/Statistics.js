import PropTypes from "prop-types";
import styles from "./Statistics.module.scss";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={styles.List}>
      <li className={styles.Item}>
        <p className={styles.Text}>Good</p>
        <p className={styles.Statistic}>{good}</p>
      </li>
      <li className={styles.Item}>
        <p className={styles.Text}>Neutral</p>
        <p className={styles.Statistic}>{neutral}</p>
      </li>
      <li className={styles.Item}>
        <p className={styles.Text}>Bad</p>
        <p className={styles.Statistic}>{bad}</p>
      </li>
      <li className={styles.Item}>
        <p className={styles.Text}>Total</p>
        <p className={styles.Statistic}>{total}</p>
      </li>
      <li className={styles.Item}>
        <p className={styles.Text}>Positive feedback</p>
        <p className={styles.Statistic}>{positivePercentage}%</p>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default Statistics;
