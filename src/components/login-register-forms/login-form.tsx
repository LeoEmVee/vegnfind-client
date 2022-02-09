import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  submitLoginForm,
  getUserByCondition,
  getFavourites,
} from '../../services/axios.service';
import LoadingModal from '../loading-modal/loading-modal';
import { useRouter } from 'next/router';
import styles from './logregform.module.css';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import {
  setAuthorized,
  setLoading,
  loggedUser,
  setRegister,
} from '../../redux/actions/loginActions';
import EmailIcon from '../../assets/icons/icon-mail.svg';
import GoogleIcon from '../../assets/icons/icon-google.svg';
import { setFavourites } from '../../redux/actions/userActions';

function LoginForm() {
  const { loading, logUser } = useAppSelector(state => state.loginReducer);
  const { userFavs } = useAppSelector(state => state.userFavsReducer);
  const dispatch: any = useAppDispatch();
  const router = useRouter();

  const validation = Yup.object({
    username: Yup.string().required('username is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
  });
  validation.validate;

  async function submitLogin(formData: any) {
    // start loading component
    dispatch(setLoading(true));
    const { access_token } = (await submitLoginForm(formData)).data;
    if (access_token) {
      // save token on localstorage
      window.localStorage.access_token = access_token;
      // toggle authorized
      dispatch(setAuthorized(true));
      // fetch User by username
      const { data } = await getUserByCondition({
        username: formData.username,
      });
      // save User in loggedUser state
      dispatch(loggedUser(data));
      // get user favourites and save user's favourites in UserFavs state
      if (data.favourites) {
        const favs = await getFavourites({ id: data.favourites.id })
        dispatch(setFavourites(favs.data));
      }
      // stop loading component
      dispatch(setLoading(false));
    } else {
      // stop loading component
      dispatch(setLoading(false));
    }
  }

  return (
    <>
      {loading && <LoadingModal />}
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        validationSchema={validation}
        onSubmit={async (values, { resetForm }) => {
          const loginData = {
            username: values.username,
            password: values.password,
          };
          await submitLogin(loginData);
          router.push('/user-dashboard');
          resetForm();
        }}>
        {formik => (
          <form className={styles.logregform} onSubmit={formik.handleSubmit}>
            <h3>Login to your account</h3>
            <input
              className={styles.logreginput}
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

            {loading ?
              <button type="submit" className={styles.submitbuttonactive} disabled>
                <EmailIcon />
                <p>Login with your e-mail</p>
              </button>
              :
              <button type="submit" className={styles.submitbutton}>
                <EmailIcon />
                <p>Login with your e-mail</p>
              </button>
            }

            <p className={styles.or}>or</p>

            {loading ?
              <button type="submit" className={styles.submitbuttonactive} disabled>
                <GoogleIcon />
                <p>Login with your Google account</p>
              </button>
              :
              <button type="submit" className={styles.submitbutton}>
                <GoogleIcon />
                <p>Login with your Google account</p>
              </button>
            }

            <p className={styles.toggleformtext}>
              I don&apos;t have an account yet
            </p>

            <button
              onClick={() => dispatch(setRegister(true))}
              className={styles.registerbutton}
              type="button">
              Register
            </button>
          </form>
        )}
      </Formik>
    </>
  );
}

export default LoginForm;
