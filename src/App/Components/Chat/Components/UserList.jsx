import React, { useContext } from 'react';

import { UserContext } from '../../../Contexts/User';
import Avatar from './Avatar';

import styles from './UserList.module.sass';

const UserList = () => {
  const { userList, typers } = useContext(UserContext);

  return (
    <div className={styles.container}>
      <ul className={`${styles.list} reset`}>
        {userList.map(user => {
          if (user === 'default') {
            return null;
          }

          return (
            <li key={user} className={styles.item}>
              <Avatar currentUser={user} className={styles.avatar} />
              <span className={styles.name}>{`${user}${
                typers[user] ? ' is Typing!' : ''
              }`}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UserList;
