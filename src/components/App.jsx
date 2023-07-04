import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import Friends from './Friends/FriendsList';
import Transactions from './Transactions/Transactions';
import user from '../Profil/user.json';
import data from '../Profil/data.json';
import friends from '../Profil/friends.json';
import transactions from '../Profil/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        photoURL={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <Friends friends={friends} />
      <Transactions items={transactions} />
    </div>
  );
};