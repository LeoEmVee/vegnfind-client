import { useRouter } from 'next/router';
import React from 'react';
import styles from './loading-modal.module.css';

interface IProps {
  isAuthorized: boolean;
}

function LoadingModal() {
  const router = useRouter();

  return (
    <div className={styles.loadingwrap}>
      <div className={styles.loadingiospinnerdualringr7b32xizt9d}>
        <div className={styles.ldioyxvxm6voab}>
          <div></div>
          <div>
            <div></div>
          </div>
        </div>
      </div>
      {router.pathname === '/login-register' && <p>logging in...</p>}
      {router.pathname === '/' && <p>Loading...</p>}
      {/* {router.pathname === '/index' && <p>loading...</p>} */}
    </div>
  );
}

export default LoadingModal;
