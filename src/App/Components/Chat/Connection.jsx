import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

import Chat from './Chat';

import { UserContext } from '../../Contexts/User';
import { SocketIOProvider } from '../../Contexts/SocketIO';

const Connection = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Redirect to="/" />
  }


  return (
    <SocketIOProvider userName={user}>
      <Chat />
    </SocketIOProvider>
  );
};

export default Connection;
