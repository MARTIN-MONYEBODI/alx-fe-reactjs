import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const registrationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const FormikForm = () => {
  return (
    <Formik
      initialValues={{ username: '', email: '', password: '' }}
      validationSchema={registrationSchema}
      onSubmit={(values, { setSubmitting }) => {
        // Add form submission logic here
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <label>
            Username:
            <Field type="text" name="username" />
            <ErrorMessage name="username" component="div" />
          </label>
          <label>
            Email:
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </label>
          <label>
            Password:
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </label>
          <button type="submit" disabled={isSubmitting}>
          Register
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;