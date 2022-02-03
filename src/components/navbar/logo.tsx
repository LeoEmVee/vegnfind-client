import Link from 'next/link';
import React from 'react';
import SearchBar from '../search-bar';

interface IProps {
  isSearch: boolean;
}

function Logo({ isSearch }: IProps) {
  return (
    <div className="logo">
      {isSearch ? (
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
