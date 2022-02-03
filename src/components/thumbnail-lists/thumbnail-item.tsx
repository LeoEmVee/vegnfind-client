import React from 'react';
import styles from './thumbnail-item.module.css'
import RatingIcon from '../../assets/icons/icon-ratingpoint-full.svg'
import FullVeganSmallFlag from '../../assets/flags/flag-full-vegan-small.svg'
import PartVeganSmallFlag from '../../assets/flags/flag-part-vegan-small.svg'


function ThumbnailItem() {
  return (
    <div className={styles.listitemwrap}>
      <div className={styles.listitemcontent}>
        <div className={styles.ratingwrap}>
          <RatingIcon className={styles.ratingicon} />
          <RatingIcon className={styles.ratingicon} />
          <RatingIcon className={styles.ratingicon} />
          <RatingIcon className={styles.ratingicon} />
          <RatingIcon className={styles.ratingicon} />
        </div>
        <FullVeganSmallFlag className={styles.flag} />
        <p className={styles.itemtitle}>Title</p>
        <p className={styles.itemlocation}>City, Region, Country</p>

      </div>
    </div>
  );
}

export default ThumbnailItem;
