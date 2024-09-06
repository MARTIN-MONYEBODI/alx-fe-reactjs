import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required')
});

const initialValues = {
  username: '',
  email: '',
  password: ''
};

const FormikForm = () => {
  const handleSubmit = (values) => {
    // Simulate API call
    console.log('Form data submitted:', values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label>
            Username:
            <Field type="text" name="username" />
            <ErrorMessage name="username" component="span" />
          </label>
        </div>
        <div>
          <label>
            Email:
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="span" />
          </label>
        </div>
        <div>
          <label>
            Password:
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="span" />
          </label>
        </div>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default FormikForm;