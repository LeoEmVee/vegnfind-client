import React from 'react';
import Link from 'next/link';
import styles from './back-to-top-button.module.css'
import ArrowUp from '../assets/icons/icon-arrow-up.svg'

function BackToTopButton() {
  return (
    <Link href="#top" passHref>
      <button className={styles.backtotopbutton}><ArrowUp /></button>
    </Link>);
}

export default BackToTopButton;
