import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Logo from './logo';
import Buttons from './buttons';
import styles from './navbar.module.css';

function Navbar() {
  const [isSearch, setIsSearch] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (
      router.pathname === '/item-detail' ||
      router.pathname === '/add-content' ||
      router.pathname === '/user-dashboard'
    ) {
      setIsSearch(true);
    }
  }, []);

  return (
    <div className={styles.navbar}>
      <div className={styles.logowrap}>
        <Logo isSearch={isSearch} />
      </div>
      <div className={styles.buttonswrap}>
        <Buttons isSearch={isSearch} />
      </div>
    </div>
  );
}

export default Navbar;
