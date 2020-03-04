import React, { useContext, createRef, useEffect } from 'react';

import Avatar from './Avatar';
import ImageMessage from './ImageMessage';
import TextMessage from './TextMessage';

import { UserContext } from '../../../Contexts/User';
import styles from './Messages.module.sass';

const formatDate = date => {
  const pad = number => {
    if (number < 10) {
      return '0' + number;
    }
    return number;
  };
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const year = date.getUTCFullYear();
  const month = pad(date.getUTCMonth() + 1);

  hours = hours % 12;
  hours = hours || 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;

  return `${year}/${month}, ${hours}:${minutes} ${ampm}`;
};

const Messages = () => {
  const { messages } = useContext(UserContext);
  const messagesEndRef = createRef();

  useEffect(() => {
    if (messagesEndRef) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, messagesEndRef]);
  return (
    <ul className="pager__messages reset">
      {messages.map(message => (
        <li key={message.time} className="pager__messages__item">
          <Avatar className={styles.avatar} currentUser={message.username} />
          <strong className="pager__messages__user">
            {`${formatDate(message.date)}: `}
          </strong>
          {message.type === 'text' && <TextMessage message={message} />}
          {message.type === 'image' && <ImageMessage message={message} />}
        </li>
      ))}
      <li ref={messagesEndRef} />
    </ul>
  );
};

export default Messages;
