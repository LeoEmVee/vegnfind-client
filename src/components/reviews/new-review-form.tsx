import React, { useEffect, useState } from 'react';
import styles from './new-review-form.module.css';
import ChooseRatingContainer from './choose-rating-container';
import { useAppSelector } from '../../redux/store';
import { createReview } from '../../services/axios.service';

function NewReviewForm({ setCanPost, itemId }) {
  const { authorized, logUser } = useAppSelector(state => state.loginReducer);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState({ text: '' });

  function handleRating(number: number) {
    setRating(number);
  }

  function handleTextChange(e: any) {
    setReviewText({ [e.target.name]: e.target.value });
  }

  useEffect(() => {
    console.log(authorized, logUser);
  }, []);

  async function handleSubmit(e: any) {
    e.preventDefault();
    if (authorized) {
      const review = {
        itemId: itemId,
        username: logUser.username,
        userPic: logUser.profilePic,
        rating: rating,
        text: reviewText.text,
      };
      console.log(review);
      await createReview(review);
      setReviewText({ text: '' });
      setRating(0);
    } else if (!authorized) {
      setCanPost(false);
    }
  }

  return (
    <div className={styles.newreviewwrap}>
      <div className={styles.newreviewheading}>
        <h4>Rate this business</h4>
        <div className={styles.ratingcontainer}>
          <ChooseRatingContainer rating={rating} handleRating={handleRating} />
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <textarea
          name="text"
          value={reviewText.text}
          className={styles.newreviewbody}
          placeholder="Enter your review"
          onChange={handleTextChange}></textarea>
        <div className={styles.newreviewbutton}>
          <button type="submit">Post</button>
        </div>
      </form>
    </div>
  );
}

export default NewReviewForm;
