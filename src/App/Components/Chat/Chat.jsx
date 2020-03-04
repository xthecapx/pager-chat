import React, { useContext, useEffect } from 'react';
import { SocketIOContext } from '../../Contexts/SocketIO';
import { UserContext } from '../../Contexts/User';
import axios from 'axios';

import ChatboxFormik from './Components/ChatboxFormik';
import Messages from './Components/Messages';
import UserList from './Components/UserList';

import styles from './Chat.module.sass';

const Chat = () => {
  const { socket, setUserOnline, userOnline } = useContext(SocketIOContext);
  const {
    setUserList,
    userList,
    user,
    setTypers,
    setMessages,
    avatar,
    setAvatar,
    setAvatarLoading,
  } = useContext(UserContext);

  useEffect(() => {
    socket.on('user-connected', data => {
      setUserList(data);

      if (!userOnline && data === user) {
        setUserOnline(true);
      }
    });

    socket.on('is-typing', typers => {
      setTypers(typers);
    });

    socket.on('message', message => {
      setMessages(message);
    });
  }, []);

  useEffect(() => {
    userList.forEach(user => {
      if (!avatar[user]) {
        setAvatarLoading(state => {
          return {
            ...state,
            [user]: true
          };
        });
        axios
          .get(`https://ui-avatars.com/api/?name=${user}`, {
            responseType: 'blob'
          })
          .then(response => {
            setAvatar(user, URL.createObjectURL(response.data));
            setAvatarLoading(state => {
              return {
                ...state,
                [user]: false
              };
            });
          });
      }
    });
  }, [userList]);

  if (userList.length === 0) {
    return <div>Loading!</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <header className={styles.header}>{`Welcome: ${user}`}</header>
        <UserList />
      </div>
      <div className={styles.mainPanel}>
        <Messages />
        <ChatboxFormik />
      </div>
    </div>
  );
};

export default Chat;
