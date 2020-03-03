import React, { useEffect, useContext } from 'react';
import { Form, Field, useFormikContext } from 'formik';

import { SocketIOContext } from '../../../Contexts/SocketIO';

const ChatboxForm = () => {
  const { socket, userOnline } = useContext(SocketIOContext);
  const { values } = useFormikContext();

  useEffect(() => {
    if (userOnline) {
      if (values.text.length > 0) {
        socket.emit('typing', true);
      } else {
        socket.emit('typing', false);
      }
    }
  }, [values, userOnline]);

  return (
    <Form>
      <Field type="text" name="text" />
      <button type="submit">Send</button>
    </Form>
  );
};

export default ChatboxForm;
