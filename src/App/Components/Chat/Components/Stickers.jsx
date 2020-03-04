import React, { useContext } from 'react';
import { UserContext } from '../../../Contexts/User';
import { SocketIOContext } from '../../../Contexts/SocketIO';
import styles from './Stickers.module.sass';

const Stickers = () => {
  const { stickers, setStickers } = useContext(UserContext);
  const { socket } = useContext(SocketIOContext);

  if (stickers.length === 0) {
    return null;
  }

  return (
    <div className="pager__stickers">
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
          }}
        >
          <img src={sticker.images.preview_gif.url} />
        </div>
      ))}
    </div>
  );
};

export default Stickers;
