import React from 'react';
import styles from './login-modal.module.css'

function LoginModal({ setCanPost }) {
  return (
    <div className={styles.loadingwrap}>
      <p>Please login to post a review</p>
    </div>
  );
}

export default LoginModal;
