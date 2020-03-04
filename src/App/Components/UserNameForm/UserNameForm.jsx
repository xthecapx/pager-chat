import React from 'react';

import { Form, Field, ErrorMessage } from 'formik';

import styles from './Styles.module.sass';

const UserNameForm = () => {
  return (
    <div className={styles.container}>
      <Form className={styles.card}>
        <h1 className={styles.title}>Join Chat</h1>
        <label className="pager__label">Please enter your user name</label>
        <Field
          type="text"
          name="username"
          placeholder="User Name"
          className="pager__input"
        />
        <div className="pager__input__error">
          <ErrorMessage name="username" component="span" />
        </div>
        <button type="submit" className="pager__btn pager__btn--next">
          Next
        </button>
      </Form>
    </div>
  );
};

export default UserNameForm;
