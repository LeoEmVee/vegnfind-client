import React, { useState } from 'react';
import NewReviewForm from './new-review-form';
import Pagination from '../pagination/pagination';
import ReviewsList from './reviews-list';
import styles from './reviews-container.module.css';
import { useRouter } from 'next/router';
import LoginModal from '../loading-modal/login-modal';

function ReviewsContainer() {

  const router = useRouter();
  const [canPost, setCanPost] = useState(true);

  return (
    <div className={styles.reviewswrap}>
      <h3>Reviews</h3>
      {canPost === false && <LoginModal setCanPost={setCanPost} />}
      {router.pathname === '/itemdetails/[id]' && <NewReviewForm setCanPost={setCanPost} />}
      <ReviewsList />
      <Pagination />
    </div>
  );
}

export default ReviewsContainer;
