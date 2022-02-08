import React from 'react';
import ReviewItem from './review-item';
import styles from './reviews-list.module.css'

function ReviewsList({ reviews }) {


  return (
    <div className={styles.reviewslistwrap}>
      {reviews.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .map(review => <ReviewItem key={review.id} reviewsCount={reviews.length} review={review} />)
      }

    </div>
  );
}

export default ReviewsList;
