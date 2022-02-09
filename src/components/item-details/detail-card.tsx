import React from 'react';
import styles from './detail-card.module.css';
import NewFavouriteButton from '../favourite-button/new-favourite-button';
import FullVeganBigFlag from '../../assets/flags/flag-full-vegan-big.svg';
import AdressIcon from '../../assets/icons/icon-house.svg';
import WebIcon from '../../assets/icons/icon-world.svg';
import PhoneIcon from '../../assets/icons/icon-phone.svg';
import MailIcon from '../../assets/icons/icon-mail.svg';
import RatingContainer from '../reviews/rating-container';
import Link from 'next/link';

function DetailCard({ item }: any) {
  return (
    <div className={styles.detailcardwrap}>
      <FullVeganBigFlag className={styles.veganflag} />
      <div className={styles.detailcardheading}>
        <NewFavouriteButton item_id={item?.id} renderedIn={'itemPage'} />
        <div className={styles.itemdetails}>
          <div className={styles.titleandstars}>
            <h2>{item?.name}</h2>
            <div className={styles.ratingcontainer}>
              <RatingContainer itemDetails={item} />
            </div>
            <Link href="#target" passHref>
              <span className={styles.numberofreviews}>
                {item?.reviews.length
                  ? item.reviews.length === 1
                    ? `${item.reviews.length} review`
                    : `${item.reviews.length} reviews`
                  : 'No reviews'}
              </span>
            </Link>
          </div>
          <p>
            <span>
              {item?.hasOwnProperty('isVegan') ? 'Business' : 'Product'}
            </span>
            {' | '}
            <span>{item?.brand ? item.brand.name : 'No brand'}</span>
            {' | '}
            <span>
              {item?.categories.length
                ? item.categories.map((category: any) =>
                    item.categories.indexOf(category) !==
                    item.categories.length - 1
                      ? category.name + ', '
                      : category.name,
                  )
                : 'No categories yet'}
            </span>
          </p>
        </div>
      </div>

      <div className={styles.detailcardbody}>
        {item?.hasOwnProperty('isVegan') ? (
          <div className={styles.detailcardspecs}>
            <div className={styles.addresswrap}>
              <AdressIcon />
              <div className={styles.address}>
                <p>
                  {item.location.address}, {item.location.zipCode}
                </p>
                <p>
                  {item.location.city}, {item.location.region},{' '}
                  {item.location.country}
                </p>
              </div>
            </div>
            <div className={styles.web}>
              <WebIcon />
              <span>{item?.website || 'No website'}</span>
            </div>
            <div className={styles.phone}>
              <PhoneIcon />
              <span>{item.telephone}</span>
            </div>
            <div className={styles.mail}>
              <MailIcon />
              <span>{item.email}</span>
            </div>
          </div>
        ) : null}
        <p className={styles.detailcarddescription}>{item?.description}</p>
      </div>
    </div>
  );
}

export default DetailCard;
