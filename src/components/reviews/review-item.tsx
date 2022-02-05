import React from 'react';
import styles from './review-item.module.css'
import RatingFull from '../../assets/icons/icon-ratingpoint-full.svg'

function ReviewItem() {

  return (
    <div className={styles.reviewwrap}>

      <div className={styles.reviewheading}>
        <div className={styles.reviewprofilepic} />

        <div className={styles.reviewuserdetails}>
          <div className={styles.firstline}>
            <span className={styles.reviewusername}>Username</span>
            <span className={styles.reviewdate}>Review date</span>
          </div>
          <div className={styles.secondline}>
            <span className={styles.reviewuserlocation}>User location · </span>
            <span className={styles.reviewuserreviews}>78 reviews</span>
          </div>
        </div>

        <div className={styles.ratingcontainer}>
          <RatingFull className={styles.ratingpoint} />
          <RatingFull className={styles.ratingpoint} />
          <RatingFull className={styles.ratingpoint} />
          <RatingFull className={styles.ratingpoint} />
          <RatingFull className={styles.ratingpoint} />
        </div>
      </div>

      <p className={styles.reviewbody}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultrices
        lectus non diam ornare eleifend. Pellentesque habitant morbi tristique senectus
        et netus et malesuada fames ac turpis egestas. Fusce maximus condimentum nisl.
        Sed tristique nisl vel dui suscipit, et congue nisi vulputate. Sed et nulla et
        nulla viverra dictum in a risus. Nunc vel risus porttitor, porttitor nisl tempus,
        scelerisque odio. Aliquam felis augue, posuere nec rutrum a, hendrerit eu tortor.
      </p>

      <button className={styles.reviewreadmore}>Read more +</button>

    </div>
  );
}

export default ReviewItem;
