import React from 'react';
import EmptyDot from '../../assets/icons/icon-ratingpoint-empty.svg'
import styles from './choose-rating-container.module.css'

function ChooseRatingContainer({ handleRating, rating }) {

  function handleRatingClick(number: number) {
    if (rating === number) {
      handleRating(0);
    } else {
      handleRating(number);
    }
  }

  return (
    <div className={styles.ratingwrap}>
      <EmptyDot className={rating < 1 ? styles.dot : styles.activedot} onClick={() => handleRatingClick(1)} />
      <EmptyDot className={rating < 2 ? styles.dot : styles.activedot} onClick={() => handleRatingClick(2)} />
      <EmptyDot className={rating < 3 ? styles.dot : styles.activedot} onClick={() => handleRatingClick(3)} />
      <EmptyDot className={rating < 4 ? styles.dot : styles.activedot} onClick={() => handleRatingClick(4)} />
      <EmptyDot className={rating < 5 ? styles.dot : styles.activedot} onClick={() => handleRatingClick(5)} />
    </div>
  );
}

export default ChooseRatingContainer;
