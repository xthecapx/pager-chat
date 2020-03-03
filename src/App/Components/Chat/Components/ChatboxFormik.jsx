import React from 'react';
import { Formik } from 'formik';

import ChatboxForm from './ChatboxForm';


const ChatboxFormik = () => {
  return (
    <Formik
      initialValues={{ text: '' }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(values.text);
          setSubmitting(false);
        }, 400);
      }}
    >
      <ChatboxForm />
    </Formik>
  );
};

export default ChatboxFormik;
