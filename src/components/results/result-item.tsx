import Link from 'next/link';
import React from 'react';
import styles from './results-item.module.css';
import FullVgnBigFlag from '../../assets/flags/flag-full-vegan-big.svg';
import PartVgnBigFlag from '../../assets/flags/flag-part-vegan-big.svg';
import NewFavouriteButton from '../favourite-button/new-favourite-button';
import RatingContainer from '../reviews/rating-container';

function ResultItem({ itemDetails }: any) {
  return (
    <Link href={`/itemdetails/${itemDetails.id}`} passHref>
      {/*IMPORTANT: This link ends up showing the item id on the page URL. Maybe we could avoid it.
      We also would need to limit the capacity to get into this page (currently it shows the page no matter what you
        enter as an ID -if it does not match something in the DB, the page will be shown blank)*/}
      <div className={styles.resultitemwrap}>
        {itemDetails.hasOwnProperty('isVegan') ? (
          itemDetails.isVegan ? (
            <FullVgnBigFlag className={styles.flag} />
          ) : (
            <PartVgnBigFlag className={styles.flag} />
          )
        ) : (
          <FullVgnBigFlag className={styles.flag} />
        )}
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
                <RatingContainer itemDetails={itemDetails} />
              </div>
              <p className={styles.reviewcounter}>
                {itemDetails.reviews.length
                  ? itemDetails.reviews.length === 1
                    ? `${itemDetails.reviews.length} review`
                    : `${itemDetails.reviews.length} reviews`
                  : 'No reviews'}
              </p>
            </div>
            <h4>
              <span>
                {itemDetails.hasOwnProperty('isVegan') ? 'Business' : 'Product'}
              </span>
              {' | '}
              <span>
                {itemDetails.brand ? itemDetails.brand.name : 'No brand'}
              </span>
              {' | '}
              <span>
                {itemDetails.categories.length
                  ? itemDetails.categories.map((category: any) =>
                    itemDetails.categories.indexOf(category) !==
                      itemDetails.categories.length - 1
                      ? category.name + ', '
                      : category.name,
                  )
                  : 'No categories yet'}
              </span>
            </h4>
            <p className={styles.itemlocation}>Barcelona, Catalunya (mock)</p>
          </div>
          <NewFavouriteButton
            item_id={itemDetails.id} /*renderedIn={'results'}*/
          />
        </div>
      </div>
    </Link>
  );
}

export default ResultItem;
