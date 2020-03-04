import React, { useContext } from 'react';
import { useFormikContext } from 'formik';

import { UserContext } from '../../../Contexts/User';
import { SocketIOContext } from '../../../Contexts/SocketIO';
import styles from './Stickers.module.sass';

const Stickers = () => {
  const { stickers, setStickers } = useContext(UserContext);
  const { socket } = useContext(SocketIOContext);
  const { setFieldValue } = useFormikContext();

  if (stickers.length === 0) {
    return null;
  }

  return (
    <div className={styles['pager__stickers']}>
      {stickers.map(sticker => (
        <div
          key={sticker.id}
          className={`${styles['pager__stickers__item']} ${styles['pager__stickers__item--clickable']}`}
          onClick={() => {
            socket.emit('image-message', {
              url: sticker.images.preview_gif.url,
              alt: sticker.title
            });
            setStickers([]);
            setFieldValue('text', '')
          }}
        >
          <img src={sticker.images.preview_gif.url} />
        </div>
      ))}
    </div>
  );
};

export default Stickers;
