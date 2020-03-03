import React, { useContext, useEffect } from 'react';
import { SocketIOContext } from '../../Contexts/SocketIO';

const Chat = () => {
  const { response, setResponse, socket } = useContext(SocketIOContext);

  useEffect(() => {
    socket.on('user-connected', data => setResponse(data));
  }, []);

  console.log({ response });

  return <div className="chat">CHAT HERE!</div>;
};

export default Chat;
