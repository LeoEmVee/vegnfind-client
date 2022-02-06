import BackToTopButton from '../components/back-to-top-button';
import Navbar from '../components/navbar/navbar';
import ResultsList from '../components/results/results-list';
import ResultsSearchContainer from '../components/results/results-page-search-container';

function Results() {
  return (
    <>
      <Navbar />
      <div>
        <ResultsSearchContainer />
        <ResultsList />
        <BackToTopButton />
      </div>
    </>
  );
}

export default Results;
