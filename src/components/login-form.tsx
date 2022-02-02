import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { submitLoginForm } from '../services/axios.service';

// interface IFFormComponent {
//   prop: any;
// }

function LoginForm() {
  const [isAuthorized, setIsAuthorized] = useState(false);

  const validation = Yup.object({
    username: Yup.string().min(8).required('username is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
  });
  validation.validate;

  async function submitLogin(data: any) {
    console.log(data);
    const token = await submitLoginForm(data);
    if (token) {
      setIsAuthorized(true);
      console.log('authorized', isAuthorized, token);
    } else {
      console.log('Unauthorized');
    }
  }

  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      validationSchema={validation}
      onSubmit={(values, { resetForm }) => {
        submitLogin(JSON.stringify(values, null, 2));
        // console.log(JSON.stringify(values, null, 2));
        resetForm();
      }}>
      {formik => (
        <form className="login-form" onSubmit={formik.handleSubmit}>
          <label htmlFor="username">User name</label>
          <div>
            <input
              id="username"
              name="username"
              type="username"
              placeholder="What is your username?"
              onChange={formik.handleChange}
              value={formik.values.username}
            />
            {formik.touched.username && formik.errors.username ? (
              <div>{formik.errors.username}</div>
            ) : null}
          </div>

          <label htmlFor="password">Password</label>
          <div>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
}

export default LoginForm;
