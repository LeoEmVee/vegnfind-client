import Navbar from '../components/navbar';

function AddContent() {
  return (
    <div className="add-content">
      <div>
        <Navbar />
        <br />
        <strong>ADD-CONTENT PAGE</strong>
      </div>
      <br />
      <div>- Some content (TBD)</div>
      <br />
      <div>
        - Maybe conditional rendering forms according to business or product
        (TBD)
      </div>
      <br />
      <button type="button">Add content (not in action yet)</button>
      <br />
      <br />
    </div>
  );
}

export default AddContent;
