import Link from 'next/link';
import React from 'react';
import { useAppSelector } from '../../redux/store';
import styles from './user-card.module.css';

function UserCard() {
  const { logUser } = useAppSelector(state => state.loginReducer);

  const formatter = new Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: 'short',
  });

  const numOfReviews = () => {
    return !logUser.reviews.length
      ? 'No reviews'
      : logUser.reviews.length === 1
        ? '1 review'
        : `${logUser.reviews.length} reviews`;
  };

  return (
    <div className={styles.usercardwrap}>
      <div className={styles.profilepicwrap}>
        {/*eslint-disable-next-line @next/next/no-img-element*/}
        <img src={logUser.profilePic} alt="Your profile pic"></img>
      </div>
      <div className={styles.detailswrap}>
        <div className={styles.detailsheader}>
          <h1>Hi, {logUser.firstName}!</h1>
          <Link href="#target" passHref>
            <p className={styles.numberofreviews}>
              {<p className={styles.numberofreviews}>{numOfReviews}</p>}
            </p>
          </Link>
          {/*<button type="button">Edit details</button> I will work in next versions*/}
        </div>
        {/*<p className={styles.userlocation}>Location</p> I will work in next versions*/}
        <p className={styles.membersince}>
          Member since {formatter.format(Date.parse(logUser.createdAt))}
        </p>
        <p className={styles.userdescription}>
          {logUser.description}
        </p>
      </div>
      <Link href="/add-content" passHref>
        <button className={styles.addcontentbutton}>
          Add a new product, shop or restaurant
        </button>
      </Link>
    </div>
  );
}

export default UserCard;
