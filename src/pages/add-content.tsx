import Footer from '../components/footer';
import Navbar from '../components/navbar';

function AddContent() {
  return (
    <div className="add-content">
      <div>
        <br />
        <strong>ADD-CONTENT PAGE</strong>
      </div>
      <br />
      <Navbar />
      <br />
      <div>- Some content (TBD)</div>
      <br />
      <div>
        - Maybe conditional rendering forms according to business or product
        (TBD)
      </div>
      <br />
      <Footer />
    </div>
  );
}

export default AddContent;
