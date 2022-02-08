import React, { useState } from 'react';
import NewReviewForm from './new-review-form';
import Pagination from '../pagination/pagination';
import ReviewsList from './reviews-list';
import styles from './reviews-container.module.css';
import { useRouter } from 'next/router';
import LoginModal from '../loading-modal/login-modal';

function ReviewsContainer({ param, reviews }) {

  const router = useRouter();
  const [canPost, setCanPost] = useState(true);

  return (
    <div className={styles.reviewswrap}>
      <h3>Reviews</h3>
      {router.pathname === '/itemdetails/[id]' && <NewReviewForm param={param} setCanPost={setCanPost} />}
      {canPost === false && <p className={styles.mustlogin}>You need to login or register in order to post!</p>}
      <ReviewsList param={param} reviews={reviews} />
      <Pagination />
    </div>
  );
}

export default ReviewsContainer;
