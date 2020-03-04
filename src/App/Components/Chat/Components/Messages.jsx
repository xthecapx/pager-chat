import React, { useContext } from 'react';

import Avatar from './Avatar';
import ImageMessage from './ImageMessage'
import TextMessage from './TextMessage'

import { UserContext } from '../../../Contexts/User';

const Messages = () => {
  const { messages } = useContext(UserContext);

  return (
    <ul className="pager__messages">
      {messages.map(message => (
        <li key={message.time} className="pager__messages__item">
          <Avatar />
          <strong className="pager__messages__user">
            {`${message.username}: `}
          </strong>
          {message.type === 'text' && <TextMessage message={message} />}
          {message.type === 'image' && <ImageMessage message={message} />}
        </li>
      ))}
    </ul>
  );
};

export default Messages;
