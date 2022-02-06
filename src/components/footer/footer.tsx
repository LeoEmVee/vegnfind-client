import React from 'react';
import styles from './footer.module.css';
import FooterLogo from '../../assets/logos/logo-twoliner-green.svg';

function Footer() {
  return (
    <div className={styles.footerwrap}>
      <FooterLogo className={styles.footerlogo} />
    </div>
  );
}

export default Footer;
