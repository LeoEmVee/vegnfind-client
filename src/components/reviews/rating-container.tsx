import RatingFull from '../../assets/icons/icon-ratingpoint-full.svg';
import RatingHalf from '../../assets/icons/icon-ratingpoint-half.svg';
import RatingEmpty from '../../assets/icons/icon-ratingpoint-empty.svg';
import styles from './rating-container.module.css';

function RatingContainer({ itemDetails }: any) {
  const avgRating = () => {
    if (itemDetails.reviews) {
      let sum = 0;
      if (!itemDetails?.reviews.length) return sum;
      itemDetails.reviews.map(review => {
        sum = sum + review.rating;
      });
      return sum / itemDetails.reviews.length;
    } else if (itemDetails.rating) {
      return itemDetails.rating;
    }
  };

  return (
    <div className={styles.ratingcontainerwrap}>
      {avgRating() < 0.5 ? (
        <RatingEmpty className={styles.ratingitem} />
      ) : avgRating() < 1 ? (
        <RatingHalf className={styles.ratingitem} />
      ) : (
        <RatingFull className={styles.ratingitem} />
      )}
      {avgRating() < 1.5 ? (
        <RatingEmpty className={styles.ratingitem} />
      ) : avgRating() < 2 ? (
        <RatingHalf className={styles.ratingitem} />
      ) : (
        <RatingFull className={styles.ratingitem} />
      )}
      {avgRating() < 2.5 ? (
        <RatingEmpty className={styles.ratingitem} />
      ) : avgRating() < 3 ? (
        <RatingHalf className={styles.ratingitem} />
      ) : (
        <RatingFull className={styles.ratingitem} />
      )}
      {avgRating() < 3.5 ? (
        <RatingEmpty className={styles.ratingitem} />
      ) : avgRating() < 4 ? (
        <RatingHalf className={styles.ratingitem} />
      ) : (
        <RatingFull className={styles.ratingitem} />
      )}
      {avgRating() < 4.5 ? (
        <RatingEmpty className={styles.ratingitem} />
      ) : avgRating() < 4.75 ? (
        <RatingHalf className={styles.ratingitem} />
      ) : (
        <RatingFull className={styles.ratingitem} />
      )}
    </div>
  );
}

export default RatingContainer;
