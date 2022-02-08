import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useAppSelector } from '../../redux/store';
import styles from './user-card.module.css';

function UserCard() {
  const { logUser } = useAppSelector(state => state.loginReducer);
  console.log(logUser);

  const formatter = new Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: 'short',
  });

  return (
    <div className={styles.usercardwrap}>
      <div className={styles.profilepicwrap}>
        {/*eslint-disable-next-line @next/next/no-img-element*/}
        <img src={logUser.profilePic} alt="Your profile pic"></img>
      </div>
      <div className={styles.detailswrap}>
        <div className={styles.detailsheader}>
          <h1>Hi, {logUser.firstName}!</h1>
          <p>
            {!logUser.reviews.length
              ? 'No reviews'
              : logUser.reviews.length === 1
              ? '1 review'
              : `${logUser.reviews.length} reviews`}
          </p>
          {/*<button type="button">Edit details</button> I will work in next versions*/}
        </div>
        {/*<p className={styles.userlocation}>Location</p> I will work in next versions*/}
        <p className={styles.membersince}>
          Member since {formatter.format(Date.parse(logUser.createdAt))}
        </p>
        <p className={styles.userdescription}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          impedit autem rerum at quisquam perferendis cum officiis tempore ea,
          sit quae! Illo, molestias? Odio tenetur quod, enim doloremque eligendi
          consectetur.
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
