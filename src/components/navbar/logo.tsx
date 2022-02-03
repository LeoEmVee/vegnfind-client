import Link from 'next/link';
import React, { useEffect } from 'react';
import MiniSearchBar from '../mini-search-bar';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import {
  toggleAuthorized,
  toggleLoading,
  loggedUser,
} from '../../redux/actions/loginActions';
import { useRouter } from 'next/router';
import SearchBar from '../search-bar';

function Logo() {
  const { authorized } = useAppSelector(state => state.loginReducer);
  const dispatch: any = useAppDispatch();
  const router = useRouter();

  let isSearchNavbar;

  useEffect(() => {
    isSearchNavbar =
      router.pathname ===
      ('/item-detail' || '/user-dashboard' || '/add-content');
  }, []);

  return (
    <div className="logo">
      {isSearchNavbar ? (
        <div className="container">
          <div className="smallLogo">
            <Link href="/">* -- Logo (link)</Link>
          </div>
          <div className="smallSearch">
            <SearchBar />
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="bigLogo">
            <Link href="/">* -- Logo (link)</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Logo;
