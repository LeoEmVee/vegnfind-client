import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import styles from './results-item.module.css';
import FullVgnBigFlag from '../../assets/flags/flag-full-vegan-big.svg';
import RatingFull from '../../assets/icons/icon-ratingpoint-full.svg';
import StarEmpty from '../../assets/icons/icon-star-empty.svg';

function ResultItem({ itemDetails }) {
  return (
    <Link href="/item-detail" passHref>
      <div className={styles.resultitemwrap}>
        <FullVgnBigFlag className={styles.flag} />
        <div className={styles.itemdetailswrap}>
          <div className={styles.itempiccontainer}></div>
          <div className={styles.itemdescriptionwrap}>
            <h3>{itemDetails.name}</h3>
            <h4>{itemDetails.description}</h4>
            <p>Barcelona, Catalunya (STILL MOCK)</p>
          </div>
          <div className={styles.ratingcontainerwrap}>
            <RatingFull className={styles.ratingitem} />
            <RatingFull className={styles.ratingitem} />
            <RatingFull className={styles.ratingitem} />
            <RatingFull className={styles.ratingitem} />
            <RatingFull className={styles.ratingitem} />
          </div>
          <p className={styles.reviewcounter}>20 reviews (STILL MOCK)</p>
          <button className={styles.favouritebutton} type="button">
            <StarEmpty />
          </button>
        </div>
      </div>
    </Link>
  );
}

export default ResultItem;
