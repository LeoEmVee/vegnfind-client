import React from 'react';
import styles from './results-page-filter-section.module.css'

function FilterSection() {

  return (
    <div className={styles.filterwrap}>
      <button className={styles.filterbuttonactivated}>All results</button>
      <button className={styles.filterbutton}>Products</button>
      <button className={styles.filterbutton}>Shops</button>
      <button className={styles.filterbutton}>Eating</button>
    </div>
  );
}

export default FilterSection;
