import Footer from '../components/footer';
import Navbar from '../components/navbar';
import ResultsList from '../components/results-list';
import SearchContainer from '../components/search-container';

function Results() {
  return (
    <div className="results-page">
      <br />
      <div>
        <strong>RESULTS PAGE</strong>
      </div>
      <br />
      <Navbar />
      <br />
      <SearchContainer />
      <br />
      <ResultsList />
      <br />
      <Footer />
    </div>
  );
}

export default Results;
