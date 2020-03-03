import React from 'react';

import { Form, Field, ErrorMessage } from 'formik';

const UserNameForm = () => {
  return (
    <Form>
      <Field type="text" name="username" />
      <ErrorMessage name="username" component="div" />
      <button type="submit">
        Submit
      </button>
    </Form>
  );
};

export default UserNameForm
