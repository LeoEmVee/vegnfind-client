import React from 'react';
import NewReviewForm from './new-review-form';
import Pagination from '../pagination/pagination';
import ReviewsList from './reviews-list';
import styles from './reviews-container.module.css';

function ReviewsContainer() {
  return (
    <div className={styles.reviewswrap}>
      <h3>Reviews</h3>
      <NewReviewForm />
      <ReviewsList />
      <Pagination />
    </div>
  );
}

export default ReviewsContainer;
