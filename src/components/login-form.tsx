import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { submitLoginForm } from '../services/axios.service';
import LoadingModal from './loading-modal';
import { useRouter } from 'next/router';
import jwt from 'jsonwebtoken';

function LoginForm() {
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const validation = Yup.object({
    username: Yup.string().min(8).required('username is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
  });
  validation.validate;

  async function submitLogin(formData: any) {
    setIsLoading(true);
    const { access_token } = (await submitLoginForm(formData)).data;
    if (access_token) {
      setIsAuthorized(true);
      window.localStorage.access_token = access_token;
      const decodedToken = jwt.verify(
        access_token,
        `${process.env.NEXT_PUBLIC_SECRET}`,
      );
      console.log(decodedToken);
      setIsLoading(false);
    } else {
      setIsAuthorized(false);
      setIsLoading(false);
    }
  }

  return (
    <>
      {isLoading && <LoadingModal />}
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        validationSchema={validation}
        onSubmit={async (values, { resetForm }) => {
          await submitLogin(JSON.stringify(values, null, 2));
          router.push('/user-dashboard');
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
    </>
  );
}

export default LoginForm;
