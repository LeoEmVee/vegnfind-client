import Link from 'next/link';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import {
  toggleAuthorized,
  setRegister,
} from '../../redux/actions/loginActions';
import cn from 'classnames';
import styles from './buttons.module.css';

interface IProps {
  isSearch: boolean;
}

function Buttons({ isSearch }: IProps) {
  const { authorized } = useAppSelector(state => state.loginReducer);
  const dispatch: any = useAppDispatch();

  function logout() {
    authorized && dispatch(toggleAuthorized());
    delete window.localStorage.access_token;
  }

  return (
    <div>
      {authorized ? (
        <div className={styles.buttonswrap}>
          <div className={styles.buttonleft}>
            <Link href="/user-dashboard">
              <button
                className={cn({
                  [styles.small]: isSearch,
                  [styles.big]: !isSearch,
                })}>
                Dashboard
              </button>
            </Link>
          </div>
          <div className={styles.buttonright}>
            <button
              className={cn({
                [styles.small]: isSearch,
                [styles.big]: !isSearch,
              })}
              onClick={() => logout()}>
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.buttonswrap}>
          <div className={styles.buttonleft}>
            <Link href="/login-register">
              <button
                onClick={() => dispatch(setRegister(false))}
                className={cn({
                  [styles.small]: isSearch,
                  [styles.big]: !isSearch,
                })}>
                Login
              </button>
            </Link>
          </div>
          <div className={styles.buttonright}>
            <Link href="/login-register">
              <button
                onClick={() => dispatch(setRegister(true))}
                className={cn({
                  [styles.small]: isSearch,
                  [styles.big]: !isSearch,
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
