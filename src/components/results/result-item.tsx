import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import styles from './results-item.module.css';
import FullVgnBigFlag from '../../assets/flags/flag-full-vegan-big.svg';
import RatingFull from '../../assets/icons/icon-ratingpoint-full.svg';
import StarEmpty from '../../assets/icons/icon-star-empty.svg';
import { url } from 'inspector';

function ResultItem({ itemDetails }: any) {
  console.log(itemDetails);
  return (
    <Link href={`/itemdetails/${itemDetails.id}`} passHref>
      {/*IMPORTANT: This link ends up showing the item id on the page URL. Maybe we could avoid it.
      We also would need to limit the capacity to get into this page (currently it shows the page no matter what you
        enter as an ID -if it does not match something in the DB, the page will be shown blank)*/}
      <div className={styles.resultitemwrap}>
        <FullVgnBigFlag className={styles.flag} />
        <div className={styles.itemdetailswrap}>
          <div
            className={styles.itempiccontainer}
            style={{ backgroundImage: `url(${itemDetails.thumbImg})` }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
          </div>
          <div className={styles.itemdescriptionwrap}>
            <div className={styles.detailsheader}>
              <h3>{itemDetails.name}</h3>
              <div className={styles.ratingcontainerwrap}>
                <RatingFull className={styles.ratingitem} />
                <RatingFull className={styles.ratingitem} />
                <RatingFull className={styles.ratingitem} />
                <RatingFull className={styles.ratingitem} />
                <RatingFull className={styles.ratingitem} />
              </div>
              <p className={styles.reviewcounter}>
                {itemDetails.reviews.length
                  ? `${itemDetails.reviews.length} reviews`
                  : 'No reviews (variable)'}
              </p>
            </div>
            <h4>
              <span>{itemDetails.isVegan ? 'Business' : 'Product'}</span>{', '}
              <span>
                {itemDetails.isVegan
                  ? itemDetails.brands.length + ' brands'
                  : itemDetails.brand
                    ? itemDetails.brand.name
                    : 'No brand'}
              </span>
              {', '}
              <span>
                {itemDetails.categories.lengh
                  ? itemDetails.categories.lengh
                  : 'No categories yet'}
              </span>
            </h4>
            <p className={styles.itemlocation}>Barcelona, Catalunya (mock)</p>
          </div>
          <button className={styles.favouritebutton} type="button">
            <StarEmpty />
          </button>
        </div>
      </div>
    </Link>
  );
}

export default ResultItem;
