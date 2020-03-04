import React, { useEffect, useContext } from 'react';
import { Form, Field, useFormikContext } from 'formik';
import axios from 'axios';

import { SocketIOContext } from '../../../Contexts/SocketIO';
import { UserContext } from '../../../Contexts/User';

import styles from './ChatboxForm.module.sass'

const queryString = params =>
  Object.keys(params)
    .map(key => {
      return key + '=' + params[key];
    })
    .join('&');

let timeout;
const ChatboxForm = () => {
  const { socket, userOnline } = useContext(SocketIOContext);
  const { setStickers } = useContext(UserContext);
  const { values } = useFormikContext();

  useEffect(() => {
    if (userOnline) {
      if (values.text.length > 0) {
        socket.emit('typing', true);

        if (values.text.match(/\/gif /gm)) {
          const search = values.text.split('/gif ');
          if (timeout) {
            clearTimeout(timeout);
          }

          if (search[1].length > 1) {
            timeout = setTimeout(() => {
              axios
                .get(
                  `https://api.giphy.com/v1/stickers/search?${queryString({
                    api_key: 'JpsrAIMVYOW6Sljlw8GXT1EgSnYWxvHl',
                    q: search[1],
                    limit: 5
                  })}`
                )
                .then(response => {
                  setStickers(response.data.data)
                });
            }, 1000);
          }
        }
      } else {
        socket.emit('typing', false);
      }
    }
  }, [values, userOnline]);

  return (
    <Form className={styles.container}>
      <Field type="text" name="text" className={`${styles.input} pager__input`}/>
      <button
        className={`${styles.btn} pager__btn pager__btn--next`}
        type="submit"
      >
        Send
      </button>
    </Form>
  );
};

export default ChatboxForm;
