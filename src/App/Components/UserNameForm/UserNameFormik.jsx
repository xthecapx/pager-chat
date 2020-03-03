import React, { useContext } from 'react';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';

import UserNameForm from './UserNameForm';

import { UserContext } from '../../Contexts/User';

const UserNameSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required')
});

const UserNameFormik = () => {
  const { setUser } = useContext(UserContext);
  const history = useHistory();

  return (
    <Formik
      initialValues={{ username: '' }}
      validationSchema={UserNameSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setUser(values.username);
          setSubmitting(false);
          history.push(`/chat`);
        }, 400);
      }}
    >
      <UserNameForm />
    </Formik>
  );
};

export default UserNameFormik;
