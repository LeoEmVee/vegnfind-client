import Navbar from '../components/navbar';
import SearchContainer from '../components/search-container';
import ThumbnailList from '../components/thumbnail-list';

function Home() {

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
