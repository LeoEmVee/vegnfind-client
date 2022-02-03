import Link from 'next/link';
import React, { useEffect, useState } from 'react';
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
  const [isSearch, setIsSearch] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (
      router.pathname === '/item-detail' ||
      '/user-dashboard' ||
      '/add-content'
    ) {
      setIsSearch(true);
    }
  }, []);

  return (
    <div className="navbar">
      <Logo isSearch={isSearch} />
      <Buttons isSearch={isSearch} />
    </div>
  );
}

export default Navbar;
