import React, { useContext } from 'react';
import { Formik } from 'formik';

import ChatboxForm from './ChatboxForm';
import Stickers from './Stickers';

import { SocketIOContext } from '../../../Contexts/SocketIO';
import styles from '../Chat.module.sass';

const ChatboxFormik = () => {
  const { socket, userOnline } = useContext(SocketIOContext);

  return (
    <Formik
      initialValues={{ text: '' }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        if (userOnline) {
          socket.emit('text-message', values.text);
        }
        resetForm();
        setSubmitting(false);
      }}
    >
      <div className={styles.stickers}>
        <Stickers />
        <div className={styles.chatBox}>
          <ChatboxForm />
        </div>
      </div>
    </Formik>
  );
};

export default ChatboxFormik;
