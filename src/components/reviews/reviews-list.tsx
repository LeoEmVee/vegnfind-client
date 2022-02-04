import React from 'react';
import ReviewItem from './review-item';

// interface IFReviewsList {
//   prop: any;
// }

function ReviewsList() {
  return (
    <div className="reviews-list">
      <div>* -- Reviews List</div>
      <ReviewItem />
    </div>
  );
}

export default ReviewsList;
