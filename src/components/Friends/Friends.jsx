import PropTypes from 'prop-types';
import css from './Friends.module.css';

export default function Friends({ avatar, name, isOnline }) {
  return (
    <li className={css.item}>
      <span className={isOnline ? css.green : css.red}></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

Friends.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};