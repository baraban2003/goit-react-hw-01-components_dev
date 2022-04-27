import Profile from './Profile/Profile';
import user from './data/user.json';
import { newStat } from './Statistics/Statistics';
import Container from './Container/Container';
import Statistics from './Statistics/Statistics';

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
      </Container>
    </div>
  );
};
