import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useAppSelector } from '../redux/store';
import styles from './user-card.module.css'


function UserCard() {

  const { logUser } = useAppSelector(state => state.loginReducer);

  return (
    <div className={styles.usercardwrap}>
      <div className={styles.profilepicwrap}>
        <img src={logUser.profilePic} alt="Your profile pic"></img>
      </div>
      <div className={styles.detailswrap}>
        <h1>Hi {logUser.firstName}</h1>
        <p>57 reviews</p>
        <p>99 years</p>
        <p>he/him</p>
        <p>Barcelona, Spain</p>
        <p>Member since Oct 2021</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae impedit autem rerum at quisquam perferendis cum officiis tempore ea, sit quae! Illo, molestias? Odio tenetur quod, enim doloremque eligendi consectetur.</p>
      </div>
      <Link href="/add-content" passHref>
        <button>Add a new product, shop or restaurant</button>
      </Link>
    </div>
  );
}

export default UserCard;
