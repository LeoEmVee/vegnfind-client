import { useRouter } from 'next/router';
import React from 'react';
import styles from './loading-modal.module.css';

interface IProps {
  isAuthorized: boolean;
}

function LoadingModal() {
  const router = useRouter();

  return (
    <div
      style={{
        position: 'absolute',
        width: 500,
        height: 300,
        display: 'flex',
        backgroundColor: 'red',
        color: 'white',
        fontSize: 30,
        zIndex: 1,
      }}>
      {router.pathname === '/login-register' && <p>logging in...</p>}
      {router.pathname === '/' && <p>loading...</p>}
      {/* {router.pathname === '/index' && <p>loading...</p>} */}
    </div>
  );
}

export default LoadingModal;
