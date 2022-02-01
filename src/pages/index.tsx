import { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import SearchContainer from '../components/search-container';
import ThumbnailList from '../components/thumbnail-list';
import { getUserByCondition } from '../services/auth.service';

function Home() {
  const [state, setState] = useState();

  async function fetchUser() {
    await getUserByCondition('Tito_Pana')
      .then(res => {
        setState(res);
      })
      .catch(error => console.log(error));
  }

  useEffect(() => {
    console.log({ state });
  }, [state]);

  return (
    <div className="home">
      <Navbar />
      <button onClick={() => fetchUser()}>This is a state changer</button>
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
