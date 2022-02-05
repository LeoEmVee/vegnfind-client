import React from 'react';
import ReviewItem from './review-item';
import styles from './reviews-list.module.css'

function ReviewsList() {
  return (
    <div className={styles.reviewslistwrap}>
      <ReviewItem />
      <ReviewItem />
      <ReviewItem />
    </div>
  );
}

export default ReviewsList;
