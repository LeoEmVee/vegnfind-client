import Navbar from '../components/navbar/navbar';
import ResultsList from '../components/results-list';
import SearchContainer from '../components/search-container';

function Results() {
  return (
    <>
      <Navbar />
      <div className="results-page">
        <br />
        <div>
          <strong>RESULTS PAGE</strong>
        </div>
        <br />
        <SearchContainer />
        <br />
        <ResultsList />
        <br />
      </div>
    </>
  );
}

export default Results;
