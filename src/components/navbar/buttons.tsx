import Link from 'next/link';
import React, { useEffect } from 'react';
import MiniSearchBar from '../mini-search-bar';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import {
  toggleAuthorized,
  toggleLoading,
  loggedUser,
} from '../../redux/actions/loginActions';
import { useRouter } from 'next/router';
import cn from 'classnames';
import styles from './buttons.module.css';

function Buttons() {
  const { authorized } = useAppSelector(state => state.loginReducer);
  const dispatch: any = useAppDispatch();
  const router = useRouter();
  // router.push('/user-dashboard');

  let isSearchNavbar;

  function logout() {
    authorized && dispatch(toggleAuthorized());
    delete window.localStorage.access_token;
  }

  useEffect(() => {
    isSearchNavbar =
      router.pathname ===
      ('/item-detail' || '/user-dashboard' || '/add-content');
  }, []);

  return (
    <div>
      {authorized ? (
        <div>
          <div className="buttonLeft">
            <Link href="/user-dashboard">
              <button
                className={cn({
                  [styles.small]: isSearchNavbar,
                  [styles.big]: !isSearchNavbar,
                })}>
                Dashboard
              </button>
            </Link>
          </div>
          <div className="buttonRight">
            <button
              className={cn({
                [styles.small]: isSearchNavbar,
                [styles.big]: !isSearchNavbar,
              })}
              onClick={() => logout()}>
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="buttonLeft">
            <Link href="/login-register">
              <button
                className={cn({
                  [styles.small]: isSearchNavbar,
                  [styles.big]: !isSearchNavbar,
                })}>
                Login
              </button>
            </Link>
          </div>
          <div className="buttonRight">
            <Link href="/login-register">
              <button
                className={cn({
                  [styles.small]: isSearchNavbar,
                  [styles.big]: !isSearchNavbar,
                })}>
                Register
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Buttons;
