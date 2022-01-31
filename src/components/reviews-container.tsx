import React from 'react';
import NewReviewForm from './new-review-form';
import Pagination from './pagination';
import ReviewsList from './reviews-list';

// interface IFReviewsContainer {
//   prop: any;
// }

function ReviewsContainer() {
  return (
    <div className="Reviews Container">
      <div>- Reviews Container</div>
      <NewReviewForm />
      <ReviewsList />
      <Pagination />
    </div>
  );
}

export default ReviewsContainer;
