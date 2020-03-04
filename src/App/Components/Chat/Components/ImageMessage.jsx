import React from 'react';
import styles from './Stickers.module.sass';

const ImageMessage = ({ message }) => {
  return (
    <div className={styles['pager__stickers__item']}>
      <img src={message.url} alt={message.alt} />
    </div>
  );
};

export default ImageMessage;
