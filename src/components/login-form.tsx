import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

// interface IFFormComponent {
//   prop: any;
// }

function LoginForm() {
  const validation = Yup.object({
    email: Yup.string()
      .email('Please enter valid e-mail address (name@exampledomain.com')
      .required('e-mail address is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
  });

  validation.validate;
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validation}
      onSubmit={(values, { resetForm }) => {
        console.log(JSON.stringify(values, null, 2));
        resetForm();
      }}>
      {formik => (
        <form className="login-form" onSubmit={formik.handleSubmit}>
          <label htmlFor="email">E-Mail address</label>
          <div>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="What is your e-mail?"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
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
