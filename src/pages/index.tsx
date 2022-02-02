import { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import SearchContainer from '../components/search-container';
import ThumbnailList from '../components/thumbnail-list';

function Home() {
  useEffect(() => {
    if (window.localStorage.access_token) {
      console.log('authorized user');
    } else {
      console.log('unauthorized user');
    }
  }, []);

  return (
    <div className="home">
      <Navbar />
      <br />
      <div>
        <strong>HOMEPAGE</strong>
      </div>
      <br />
      <SearchContainer />
      <br />
      <ThumbnailList />
      <ThumbnailList />
      <ThumbnailList />
      <br />
    </div>
  );
}

export default Home;
