import Navbar from '../components/navbar/navbar';
import ResultsList from '../components/results-list';
import ResultsSearchContainer from '../components/results/results-page-search-container';

function Results() {
  return (
    <>
      <Navbar />
      <div>
        <ResultsSearchContainer />
        <ResultsList />
      </div>
    </>
  );
}

export default Results;
