import PropTypes from 'prop-types';
import s from './FriendList.module.css';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendList}>
      {friends.map(e => (
        <FriendListItem
          key={e.id}
          id={e.id}
          avatar={e.avatar}
          name={e.name}
          isOnline={e.isOnline}
        />
      ))}
    </ul>
  );
};

export default FriendList;
