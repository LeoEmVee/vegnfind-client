import Link from 'next/link';
import React from 'react';
import MiniSearchBar from './mini-search-bar';

// interface IFNavbar {
//   prop: any;
// }

function Navbar({ setLogOrReg }: any) {
  return (
    <div className="navbar">
      <div>
        <strong>- Navbar</strong>
      </div>
      <div>
        <Link href="/">* -- Logo (link)</Link>
      </div>
      <div>* -- Conditional search bar (only in results)</div>
      <span>* -- </span>
      <Link href="/login-register" passHref>
        <button type="button" onClick={() => setLogOrReg('reg')}>
          Register (link)
        </button>
      </Link>
      <Link href="/login-register" passHref>
        <button type="button" onClick={() => setLogOrReg('log')}>
          Login (link)
        </button>
      </Link>
      <Link href="/user-dashboard" passHref>
        <button type="button">User dashboard (link)</button>
      </Link>
      <MiniSearchBar />
    </div>
  );
}

export default Navbar;
