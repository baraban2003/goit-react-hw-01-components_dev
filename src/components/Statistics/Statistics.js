import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import stat from '../data/statistics.json';

//Забираю json и пересоздаю новый отфильтрованный по label
export const newStat = Object.values(
  stat.reduce((el, item) => {
    el[item.label] = el[item.label]
      ? { ...item, percentage: item.percentage + el[item.label].percentage }
      : item;
    return el;
  }, {})
);

const Statistics = ({ title = 'Upload stats', stats }) => {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>{title}</h2>

      <ul className={s.statList}>
        {stats.map(e => (
          <li
            key={e.id}
            style={{
              backgroundColor: `#${Math.floor(
                Math.random() * 16777215
              ).toString(16)}`,
            }}
            className={s.item}
          >
            <span className={s.label}>{e.label}</span>
            <span className={s.percentage}>{e.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ),
};
export default Statistics;
