import React from 'react';
import styles from './footer.module.css';
import FooterLogo from '../../assets/logos/logo-twoliner-green.svg';

function Footer() {
  return (
    <div className={styles.footerwrap}>
      <div className={styles.footertext}>
        <div className={styles.footertexttitle}>
          <div>VeganFind</div>
        </div>
        <div>Thesis project at Codeworks</div>
        <div>By Alex Vila, Oriol Cervantes & Santi Mesa</div>
        <div>Barcelona, February, 2022</div>
      </div>
      <FooterLogo className={styles.footerlogo} />
    </div>
  );
}

export default Footer;
