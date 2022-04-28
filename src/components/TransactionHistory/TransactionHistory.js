import PropTypes from 'prop-types';
import s from '../TransactionHistory/TransactionHistory.module.css';

const TransactionHistory = ({ transactions }) => {
  return (
    <table className={s.table}>
      <thead className={s.thead}>
        <tr className={s.tr}>
          <th className={s.th}>Type</th>
          <th className={s.th}>Amount</th>
          <th className={s.th}>Currency</th>
        </tr>
      </thead>

      {transactions.map(e => {
        return (
          <tbody className={s.tbody} key={e.id}>
            <tr className={s.tr}>
              <td className={s.td}>{e.type}</td>
              <td className={s.td}>{e.amount}</td>
              <td className={s.td}>{e.currency}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default TransactionHistory;
