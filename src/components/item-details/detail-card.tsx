import React from 'react';
import styles from './detail-card.module.css'
import FavouriteIconEmpty from '../../assets/icons/icon-star-empty.svg'
import FavouriteIconFull from '../../assets/icons/icon-star-full.svg'
import FullVeganBigFlag from '../../assets/flags/flag-full-vegan-big.svg'
import PartVeganBigFlag from '../../assets/flags/flag-part-vegan-big.svg'
import RatingPointFull from '../../assets/icons/icon-ratingpoint-full.svg'
import RatingPointEmpty from '../../assets/icons/icon-ratingpoint-empty.svg'
import AdressIcon from '../../assets/icons/icon-house.svg'
import WebIcon from '../../assets/icons/icon-world.svg'
import PhoneIcon from '../../assets/icons/icon-phone.svg'
import MailIcon from '../../assets/icons/icon-mail.svg'

function DetailCard() {
  return (
    <div className={styles.detailcardwrap}>
      <FullVeganBigFlag className={styles.veganflag} />
      <div className={styles.detailcardheading}>
        <FavouriteIconEmpty className={styles.favouriteicon} />
        <div className={styles.itemdetails}>
          <div className={styles.titleandstars}>
            <h2>Not Only Salads</h2>
            <div className={styles.ratingcontainer}>
              <RatingPointFull className={styles.ratingpoint} />
              <RatingPointFull className={styles.ratingpoint} />
              <RatingPointFull className={styles.ratingpoint} />
              <RatingPointFull className={styles.ratingpoint} />
              <RatingPointFull className={styles.ratingpoint} />
            </div>
            <span className={styles.numberofreviews}>34 reviews</span>
          </div>
          <p>Shop, Brand, Category</p>
        </div>
      </div>

      <div className={styles.detailcardbody}>
        <div className={styles.detailcardspecs}>
          <div className={styles.addresswrap}>
            <AdressIcon />
            <div className={styles.address}>
              <p>Street Name, 99</p>
              <p>City, Region, Country</p>
            </div>
          </div>
          <div className={styles.web}>
            <WebIcon />
            <span>www.notonly.salads</span>
          </div>
          <div className={styles.phone}>
            <PhoneIcon />
            <span>+34 564656 76867</span>
          </div>
          <div className={styles.mail}>
            <MailIcon />
            <span>notonly@salads.com</span>
          </div>
        </div>
        <p className={styles.detailcarddescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultrices lectus non diam
          ornare eleifend. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Fusce maximus condimentum nisl. Sed tristique nisl vel dui suscipit, et congue
          nisi vulputate. Sed et nulla et nulla viverra dictum in a risus. Nunc vel risus porttitor,
          porttitor nisl tempus, scelerisque odio. Aliquam felis augue, posuere nec rutrum a, hendrerit
          eu tortor.  Nunc vel risus porttitor, porttitor nisl tempus, scelerisque odio. Aliquam felis augue,
          posuere nec rutrum a, hendrerit eu tortor.
        </p>
      </div>
    </div>
  );
}

export default DetailCard;
