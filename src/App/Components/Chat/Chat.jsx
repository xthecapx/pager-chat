import React, { useContext, useEffect } from 'react';
import { SocketIOContext } from '../../Contexts/SocketIO';
import { UserContext } from '../../Contexts/User';

import ChatboxFormik from './Components/ChatboxFormik';

const Chat = () => {
  const { socket, setUserOnline, userOnline } = useContext(SocketIOContext);
  const { setUserList, userList, user, typers, setTypers } = useContext(
    UserContext
  );

  useEffect(() => {
    socket.on('user-connected', data => {
      setUserList(data);

      if (!userOnline && data === user) {
        setUserOnline(true)
      }
    });

    socket.on('is-typing', typers => {
      setTypers(typers);
    });
  }, []);

  if (userList.length === 0) {
    return <div>Loading!</div>;
  }

  return (
    <div className="chat">
      <header>{`Welcome: ${user}`}</header>
      <ul className="onlineUsers">
        {userList.map(user => (
          <li key={user}>
            {`${user}: ${typers[user] ? 'Typing!' : ''}`}
          </li>
        ))}
      </ul>
      <ChatboxFormik />
    </div>
  );
};

export default Chat;
