import React from 'react';
import styles from './new-review-form.module.css'
import RatingEmpty from '../../assets/icons/icon-ratingpoint-empty.svg'

function NewReviewForm() {
  return (
    <div className={styles.newreviewwrap}>
      <div className={styles.newreviewheading}>
        <h4>Rate this business</h4>
        <div className={styles.ratingcontainer}>
          <RatingEmpty className={styles.ratingpoint} />
          <RatingEmpty className={styles.ratingpoint} />
          <RatingEmpty className={styles.ratingpoint} />
          <RatingEmpty className={styles.ratingpoint} />
          <RatingEmpty className={styles.ratingpoint} />
        </div>
      </div>
      <form>
        <textarea className={styles.newreviewbody} placeholder="Enter your review"></textarea>
        <div className={styles.newreviewbutton}><button type="submit">Post</button></div>
      </form>
    </div>
  );
}

export default NewReviewForm;
