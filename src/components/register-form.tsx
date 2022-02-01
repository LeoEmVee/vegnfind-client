import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

// interface IFFormComponent {
//   prop: any;
// }

function RegisterForm() {
  const validation = Yup.object({
    firstName: Yup.string()
      .min(2, 'First name must be at least 2 characters')
      .max(15, 'First name must be 15 characters max')
      .required('First name is required'),
    lastName: Yup.string()
      .min(2, 'Last name must be at least 2 characters')
      .max(20, 'Last name must be 20 characters max')
      .required('Last name is required'),
    email: Yup.string()
      .email('Please enter valid e-mail address (name@exampledomain.com')
      .required('e-mail address is required'),
    userName: Yup.string()
      .min(2, 'Username must be at least 2 characters')
      .max(20, 'Username must be 20 characters max')
      .required('Username is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
    profilePic: Yup.string()
      .min(5, 'Profile pic must be at least 5 charaters')
      .required('Profile pic is required'),
  });

  validation.validate;
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        userName: '',
        password: '',
        profilePic: '',
      }}
      validationSchema={validation}
      onSubmit={(values, { resetForm }) => {
        console.log(JSON.stringify(values, null, 2));
        resetForm();
      }}>
      {formik => (
        <form className="register-form" onSubmit={formik.handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <div>
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="What is your first name?"
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div>{formik.errors.firstName}</div>
            ) : null}
          </div>

          <label htmlFor="lastName">Last Name</label>
          <div>
            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="What is your last name?"
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div>{formik.errors.lastName}</div>
            ) : null}
          </div>

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

          <label htmlFor="userName">User name</label>
          <div>
            <input
              id="userName"
              name="userName"
              type="text"
              placeholder="Enter your username"
              onChange={formik.handleChange}
              value={formik.values.userName}
            />
            {formik.touched.userName && formik.errors.userName ? (
              <div>{formik.errors.userName}</div>
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

          <label htmlFor="profilePic">Profile picture</label>
          <div>
            <input
              id="profilePic"
              name="profilePic"
              type="text"
              placeholder="Upload profile pic (text by now)"
              onChange={formik.handleChange}
              value={formik.values.profilePic}
            />
            {formik.touched.profilePic && formik.errors.profilePic ? (
              <div>{formik.errors.profilePic}</div>
            ) : null}
          </div>

          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
}

export default RegisterForm;
