import Profile from './Profile/Profile';
import user from './data/user.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';
import { newStat } from './Statistics/Statistics';
import Container from './Container/Container';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div>
      <Container>
        <Profile
          key={user.username}
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title={newStat.title} stats={newStat} />
        <FriendList friends={friends} />
        <TransactionHistory transactions={transactions} />
      </Container>
    </div>
  );
};
