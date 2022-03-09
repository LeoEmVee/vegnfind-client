import React, { useEffect, useState } from 'react';
import styles from './review-item.module.css';
import RatingFull from '../../assets/icons/icon-ratingpoint-full.svg';
import RatingHalf from '../../assets/icons/icon-ratingpoint-half.svg';
import RatingEmpty from '../../assets/icons/icon-ratingpoint-empty.svg';

function ReviewItem({ review, reviewsCount, username }) {
  const date = new Date(review.createdAt);
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className={styles.reviewwrap}>
      <div className={styles.reviewheading}>
        <div
          className={styles.reviewprofilepic}
          style={{ backgroundImage: `url(${review.userPic})` }}
        />

        <div className={styles.reviewuserdetails}>
          <div className={styles.firstline}>
            <span className={styles.reviewusername}>
              {review.user && review.user.username}
              {username && username}
            </span>
            <span className={styles.reviewdate}>
              {formattedDate.format(Date.parse(date))}
            </span>
          </div>
          <div className={styles.secondline}>
            {/* <span className={styles.reviewuserlocation}>User location · </span> */}
            <span className={styles.reviewuserreviews}>
              {reviewsCount} reviews
            </span>
          </div>
        </div>

        <div className={styles.ratingcontainer}>
          {review.rating < 0.5 ? (
            <RatingEmpty className={styles.ratingpoint} />
          ) : review.rating < 1 ? (
            <RatingHalf className={styles.ratingpoint} />
          ) : (
            <RatingFull className={styles.ratingpoint} />
          )}
          {review.rating < 1.5 ? (
            <RatingEmpty className={styles.ratingpoint} />
          ) : review.rating < 2 ? (
            <RatingHalf className={styles.ratingpoint} />
          ) : (
            <RatingFull className={styles.ratingpoint} />
          )}
          {review.rating < 2.5 ? (
            <RatingEmpty className={styles.ratingpoint} />
          ) : review.rating < 3 ? (
            <RatingHalf className={styles.ratingpoint} />
          ) : (
            <RatingFull className={styles.ratingpoint} />
          )}
          {review.rating < 3.5 ? (
            <RatingEmpty className={styles.ratingpoint} />
          ) : review.rating < 4 ? (
            <RatingHalf className={styles.ratingpoint} />
          ) : (
            <RatingFull className={styles.ratingpoint} />
          )}
          {review.rating < 4.5 ? (
            <RatingEmpty className={styles.ratingpoint} />
          ) : review.rating < 5 ? (
            <RatingHalf className={styles.ratingpoint} />
          ) : (
            <RatingFull className={styles.ratingpoint} />
          )}
        </div>
      </div>

      <p className={styles.reviewbody}>{review.text}</p>

      {/* <button className={styles.reviewreadmore}>Read more +</button> */}
    </div>
  );
}

export default ReviewItem;
