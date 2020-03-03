import React, { createContext, useState, useRef } from 'react';
import socketIOClient from 'socket.io-client';

export const SocketIOContext = createContext({});

export const SocketIOProvider = ({ children, userName }) => {
  const [response, setResponse] = useState(false);
  const socket = useRef(
    socketIOClient(
      encodeURI(`https://pager-hiring.herokuapp.com/?username=${userName}`)
    )
  );

  return (
    <SocketIOContext.Provider
      value={{
        response,
        setResponse,
        socket: socket.current
      }}
    >
      {children}
    </SocketIOContext.Provider>
  );
};
