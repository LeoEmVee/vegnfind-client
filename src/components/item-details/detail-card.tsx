import React from 'react';
import styles from './detail-card.module.css';
import FavouriteButton from '../favourite-button/favourite-button';
import FullVeganBigFlag from '../../assets/flags/flag-full-vegan-big.svg';
import AdressIcon from '../../assets/icons/icon-house.svg';
import WebIcon from '../../assets/icons/icon-world.svg';
import PhoneIcon from '../../assets/icons/icon-phone.svg';
import MailIcon from '../../assets/icons/icon-mail.svg';
import RatingContainer from '../reviews/rating-container';
import Link from 'next/link';

function DetailCard({ param }: any) {
  return (
    <div className={styles.detailcardwrap}>
      <FullVeganBigFlag className={styles.veganflag} />
      <div className={styles.detailcardheading}>
        {/* <FavouriteButton item_id={param.id} renderedIn={'itemPage'} /> */}
        <div className={styles.itemdetails}>
          <div className={styles.titleandstars}>
            <h2>{param?.name}</h2>
            <div className={styles.ratingcontainer}>
              <RatingContainer itemDetails={param} />
            </div>
            <Link href="#target" passHref>
              <span className={styles.numberofreviews}>
                {param?.reviews.length
                  ? param.reviews.length === 1
                    ? `${param.reviews.length} review`
                    : `${param.reviews.length} reviews`
                  : 'No reviews'}
              </span>
            </Link>
          </div>
          <p>
            <span>
              {param?.hasOwnProperty('isVegan') ? 'Business' : 'Product'}
            </span>
            {' | '}
            <span>
              {param?.hasOwnProperty('isVegan')
                ? param?.brands.length + ' brands'
                : param?.brand
                ? param?.brand.name
                : 'No brands to list'}
            </span>
            {' | '}
            <span>
              {param?.categories.length
                ? param.categories.map((category: any) =>
                    param.categories.indexOf(category) !==
                    param.categories.length - 1
                      ? category.name + ', '
                      : category.name,
                  )
                : 'No categories yet'}
            </span>
          </p>
        </div>
      </div>

      <div className={styles.detailcardbody}>
        {param?.hasOwnProperty('isVegan') ? (
          <div className={styles.detailcardspecs}>
            <div className={styles.addresswrap}>
              <AdressIcon />
              <div className={styles.address}>
                <p>{param.location.address}</p>
                <p>
                  {param.location.zipCode} {param.location.city}
                </p>
                <p>
                  {param.location.region}, {param.location.country}
                </p>
              </div>
            </div>
            <div className={styles.web}>
              <WebIcon />
              <span>
                www.itemweb.com <strong>mock!!</strong>
              </span>
            </div>
            <div className={styles.phone}>
              <PhoneIcon />
              <span>{param.telephone}</span>
            </div>
            <div className={styles.mail}>
              <MailIcon />
              <span>{param.email}</span>
            </div>
          </div>
        ) : null}
        <p className={styles.detailcarddescription}>{param?.description}</p>
      </div>
    </div>
  );
}

export default DetailCard;
