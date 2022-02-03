import Link from 'next/link';
import React from 'react';
import MiniSearchBar from '../mini-search-bar';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import {
  toggleAuthorized,
  toggleLoading,
  loggedUser,
} from '../../redux/actions/loginActions';
import { useRouter } from 'next/router';
import Logo from './logo';
import Buttons from './buttons';

function Navbar() {
  return (
    <div className="navbar">
      <Logo />
      <Buttons />
    </div>
  );
}

export default Navbar;
