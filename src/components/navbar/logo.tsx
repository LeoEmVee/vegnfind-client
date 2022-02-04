import Link from 'next/link';
import React from 'react';
import SearchBar from '../search/search-bar';
import styles from './logo.module.css';
import BigLogo from '../../assets/logos/logo-oneliner-black.svg';
import SmallLogo from '../../assets/logos/logo-twoliner-black.svg';

interface IProps {
  isSearch: boolean;
}

function Logo({ isSearch }: IProps) {
  return (
    <div className="logo">
      {isSearch ? (
        <div className={styles.logowrap}>
          <div className={styles.smalllogo}>
            <Link href="/">
              <SmallLogo />
            </Link>
          </div>
          <div className="smallSearch">
            <SearchBar />
          </div>
        </div>
      ) : (
        <div className="container">
          <div className={styles.biglogo}>
            <Link href="/">
              <BigLogo />
            </Link>
            <h2>Your vegan lifestyle search tool</h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default Logo;
