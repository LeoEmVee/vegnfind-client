import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import styles from './results-item.module.css';
import FullVgnBigFlag from '../../assets/flags/flag-full-vegan-big.svg';
import RatingFull from '../../assets/icons/icon-ratingpoint-full.svg';
import StarEmpty from '../../assets/icons/icon-star-empty.svg';

function ResultItem({ itemDetails }: any) {
  return (
    <Link href="/item-detail" passHref>
      <div className={styles.resultitemwrap}>
        <FullVgnBigFlag className={styles.flag} />
        <div className={styles.itemdetailswrap}>
          <div className={styles.itempiccontainer}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={itemDetails.thumbImg} alt="img" />
          </div>
          <div className={styles.itemdescriptionwrap}>
            <h3>{itemDetails.name}</h3>
            <h4>Brand and Category (still mock)</h4>
            <p>Barcelona, Catalunya (still mock)</p>
          </div>
          <div className={styles.ratingcontainerwrap}>
            <RatingFull className={styles.ratingitem} />
            <RatingFull className={styles.ratingitem} />
            <RatingFull className={styles.ratingitem} />
            <RatingFull className={styles.ratingitem} />
            <RatingFull className={styles.ratingitem} />
          </div>
          <p className={styles.reviewcounter}>20 reviews (still mock)</p>
          <button className={styles.favouritebutton} type="button">
            <StarEmpty />
          </button>
        </div>
      </div>
    </Link>
  );
}

export default ResultItem;
