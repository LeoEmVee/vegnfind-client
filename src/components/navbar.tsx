import Link from 'next/link';
import React from 'react';

// interface IFNavbar {
//   prop: any;
// }

function Navbar() {
  return (
    <div className="navbar">
      <div>- Navbar</div>
      <div>
        <Link href="/">* -- Logo (link)</Link>
      </div>
      <div>* -- Conditional search bar (only in results)</div>
      <span>* -- </span>
      <Link href="/login-register" passHref>
        <button type="button">Register (link)</button>
      </Link>
      <Link href="/login-register" passHref>
        <button type="button">Login (link)</button>
      </Link>
    </div>
  );
}

export default Navbar;
