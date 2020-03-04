import React, { useContext, useEffect } from 'react';
import { SocketIOContext } from '../../Contexts/SocketIO';
import { UserContext } from '../../Contexts/User';

import ChatboxFormik from './Components/ChatboxFormik';
import Messages from './Components/Messages';
import Stickers from './Components/Stickers';
import UserList from './Components/UserList';

import styles from 'Chat.module.sass';

const Chat = () => {
  const { socket, setUserOnline, userOnline } = useContext(SocketIOContext);
  const {
    setUserList,
    userList,
    user,
    typers,
    setTypers,
    setMessages
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
        <div className={styles.chatBox}>
          <ChatboxFormik />
          <Stickers />
        </div>
      </div>
    </div>
  );
};

export default Chat;
