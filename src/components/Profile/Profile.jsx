import PropTypes from 'prop-types';
import defaultIMG from '../Images/default_picture.jpg';
import css from '../Profile/Profile.module.css';

export default function Profile({
  username = 'User',
  tag,
  location = 'Somewhere in the World',
  photoURL = defaultIMG,
  followers,
  views,
  likes,
}) {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={photoURL} alt={username} className="avatar" />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.statsItem}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{followers}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{views}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  photoURL: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};