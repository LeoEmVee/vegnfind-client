import Footer from '../components/footer';
import Navbar from '../components/navbar';
import SearchContainer from '../components/search-container';
import ThumbnailList from '../components/thumbnail-list';

function Home() {
  return (
    <div className="home">
      <br />
      <div>
        <strong>HOMEPAGE</strong>
      </div>
      <br />
      <Navbar />
      <br />
      <SearchContainer />
      <br />
      <ThumbnailList />
      <br />
      <Footer />
    </div>
  );
}

export default Home;
