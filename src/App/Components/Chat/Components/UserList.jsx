import React from 'react';

import { UserContext } from '../../../Contexts/User';
import Avatar from './Avatar';

const UserList = () => {
  const { userList, typers } = useContext(UserContext);

  return (
    <div>
      <ul className="onlineUsers">
        {userList.map(user => (
          <li key={user}>
            <Avatar currentUser={user} />
            <span>{`${user}: ${typers[user] ? 'Typing!' : ''}`}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
