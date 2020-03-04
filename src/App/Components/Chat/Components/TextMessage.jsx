import React from 'react';

const TextMessage = ({ message }) => {
  return <span className="pager__messages__text">{message.text}</span>;
};

export default TextMessage;
