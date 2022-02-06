import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useAppSelector } from '../../redux/store';
import styles from './user-card.module.css';

function UserCard() {
  const { logUser } = useAppSelector(state => state.loginReducer);

  return (
    <div className={styles.usercardwrap}>
      <div className={styles.profilepicwrap}>
        <img src={logUser.profilePic} alt="Your profile pic"></img>
      </div>
      <div className={styles.detailswrap}>
        <div className={styles.detailsheader}>
          <h1>Hi {logUser.firstName}!</h1>
          <p>57 reviews</p>
          <button type="button">Edit details</button>
        </div>
        <p className={styles.userlocation}>Barcelona, Spain</p>
        <p className={styles.membersince}>Member since Oct 2021</p>
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
