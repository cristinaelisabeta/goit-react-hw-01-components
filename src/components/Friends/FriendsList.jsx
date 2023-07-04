import PropTypes from 'prop-types';
import Friends from './Friends';
import css from './FriendsList.module.css';

export default function FriendsList({ friends }) {
  return (
    <ul className={css.friendsList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <Friends key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </ul>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};