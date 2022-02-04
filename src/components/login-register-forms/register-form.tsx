import React, { SetStateAction, useEffect, useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import styles from './logregform.module.css';
import {
  getCloudinaryUrl,
  getUserByCondition,
  submitLoginForm,
  submitRegisterForm,
} from '../../services/axios.service';
import LoadingModal from '../loading-modal';
import { useAppSelector, useAppDispatch } from '../../redux/store';
import {
  loggedUser,
  setLoading,
  setAuthorized,
  setRegister,
} from '../../redux/actions/loginActions';
import { useRouter } from 'next/router';

function RegisterForm() {
  const [previewSource, setPreviewSource] = useState('');
  const { loading, logUser } = useAppSelector(state => state.loginReducer);
  const dispatch: any = useAppDispatch();
  const router = useRouter();

  async function submitRegister(formData: any) {
    dispatch(setLoading(true));
    try {
      const registered = (await submitRegisterForm(formData)).data;
      const loginData = {
        username: registered.username,
        password: registered.password,
      };
      const { access_token } = (await submitLoginForm(loginData)).data;
      window.localStorage.access_token = access_token;
      dispatch(setAuthorized(true));
      console.log('registered user', registered);
      dispatch(loggedUser(registered));
      dispatch(setLoading(false));
      router.push('/user-dashboard');
    } catch (error) {
      dispatch(setAuthorized(false));
      dispatch(setLoading(false));
      console.log('Something went wrong in auth');
    }
  }

  const handleFileInputChange = (e: any) => {
    const file = e.target.files[0];
    previewFile(file);
  };

  const previewFile = (file: Blob) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource((): SetStateAction<any> => {
        return reader.result;
      });
    };
  };

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
    username: Yup.string()
      .min(2, 'Username must be at least 2 characters')
      .max(20, 'Username must be 20 characters max')
      .required('Username is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
  });

  validation.validate;
  return (
    <>
      {loading && <LoadingModal />}
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          username: '',
          password: '',
          profilePic: '',
        }}
        validationSchema={validation}
        onSubmit={async (values, { resetForm }) => {
          dispatch(setLoading(true));
          const newFile = { data: previewSource };
          const uploadedPic = await getCloudinaryUrl(newFile);

          values = {
            ...values,
            profilePic: uploadedPic.data.secure_url,
          };
          await submitRegister(values);
          dispatch(setLoading(false));
          setPreviewSource('');
          resetForm();
        }}>
        {formik => (
          <form className={styles.logregform} onSubmit={formik.handleSubmit}>
            <h3>Create a new account</h3>
            <input
              className={styles.logreginput}
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

            <input
              className={styles.logreginput}
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

            <input
              className={styles.logreginput}
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

            <input
              className={styles.logreginput}
              id="username"
              name="username"
              type="text"
              placeholder="Enter your username"
              onChange={formik.handleChange}
              value={formik.values.username}
            />
            {formik.touched.username && formik.errors.username ? (
              <div>{formik.errors.username}</div>
            ) : null}

            <input
              className={styles.logreginput}
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

            <label className={styles.addpicturelabel} htmlFor="profilePic">Choose a profile pic</label>

            <input
              className={styles.addfileinput}
              id="profilePic"
              name="profilePic"
              onChange={handleFileInputChange}
              type="file"
              value={formik.values.profilePic}
            />
            {formik.touched.profilePic && formik.errors.profilePic ? (
              <div>{formik.errors.profilePic}</div>
            ) : null}

            {previewSource && (
              <div className={styles.imgwrap}>
                <img src={previewSource} alt="Business Main Pic"></img>
              </div>
            )}

            <button className={styles.createuserbutton} type="submit">Register</button>

            <p className={styles.toggleformtext}>I already have an account!</p>

            <button
              onClick={() => dispatch(setRegister(false))}
              className={styles.loginbutton}
              type="button">Login
            </button>
          </form>
        )}
      </Formik>
    </>
  );
}

export default RegisterForm;
