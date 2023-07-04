import PropTypes from 'prop-types';
import css from '../Transactions/Transactions.module.css';

export default function Transactions({ items }) {
  return (
    <table className={css.transactions}>
      <thead>
        <tr>
          <th className={css.title}>Type</th>
          <th className={css.title}>Amount</th>
          <th className={css.title}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr className={css.tr} key={id}>
              <td className={css.td}>{type}</td>
              <td className={css.tt}>{amount}</td>
              <td className={css.td}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};