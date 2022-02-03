import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Logo from './logo';
import Buttons from './buttons';

function Navbar() {
  const [isSearch, setIsSearch] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (
      router.pathname === '/item-detail' ||
      router.pathname === '/add-content' ||
      router.pathname === '/user-dashboard'
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
