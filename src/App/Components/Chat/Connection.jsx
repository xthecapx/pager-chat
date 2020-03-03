import React, { useContext } from 'react';

import Chat from './Chat';

import { UserContext } from '../../Contexts/User';
import { SocketIOProvider } from '../../Contexts/SocketIO';

const Connection = () => {
  const { user } = useContext(UserContext);

  return (
    <SocketIOProvider userName={user}>
      <Chat />
    </SocketIOProvider>
  );
};

export default Connection;
