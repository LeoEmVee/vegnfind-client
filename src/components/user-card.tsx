import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useAppSelector } from '../redux/store';

// interface IFUserCard {
//   name: any;
// }

function UserCard() {

  // const { firstName, profilePic } = useAppSelector(state => state.loginForm.logUser);


  return (
    <div className="user-card">
      {/* <Image src={profilePic} width="200" height="200" alt="Your profile pic"></Image>
      <h1>Hi {firstName}</h1> */}
      <p>57 reviews</p>
      <p>99 years</p>
      <p>he/him</p>
      <p>Barcelona, Spain</p>
      <p>Member since Oct 2021</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae impedit autem rerum at quisquam perferendis cum officiis tempore ea, sit quae! Illo, molestias? Odio tenetur quod, enim doloremque eligendi consectetur.</p>

      <Link href="/add-content" passHref>
        <a>Add a new product, shop or restaurant</a>
      </Link>
    </div>
  );
}

export default UserCard;
