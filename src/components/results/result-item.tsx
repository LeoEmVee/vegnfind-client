import Link from 'next/link';
import React from 'react';
import styles from './results-item.module.css';
import FullVgnBigFlag from '../../assets/flags/flag-full-vegan-big.svg';
import RatingFull from '../../assets/icons/icon-ratingpoint-full.svg';
import FavouriteButton from '../favourite-button/favourite-button';

function ResultItem({ itemDetails }: any) {
  console.log(itemDetails);
  const ratingStars = [];
  for (let i = 1; i <= itemDetails.rating; i++) {
    ratingStars.push(<RatingFull className={styles.ratingitem} />);
  }

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
                {[...Array(itemDetails.rating)].map(i =>
                  itemDetails.rating ? (
                    <RatingFull className={styles.ratingitem} key={i} />
                  ) : null,
                )}
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
              <span>{itemDetails.isVegan ? 'Business' : 'Product'}</span>
              {' | '}
              <span>
                {itemDetails.isVegan
                  ? itemDetails.brands.length + ' brands'
                  : itemDetails.brand
                    ? itemDetails.brand.name
                    : 'No brand'}
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
          <FavouriteButton itemId={itemDetails.id} renderedIn={"results"} />
        </div>
      </div>
    </Link>
  );
}

export default ResultItem;
