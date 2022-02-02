import { useState } from "react";
import AddBusinessForm from "../components/addBusinessForm";
import AddProductForm from "../components/addProductForm";

function AddContent() {

  const [businessForm, setBusinessForm] = useState<boolean>(false);
  const [productForm, setProductForm] = useState<boolean>(false);

  return (
    <div className="add-content">
      <h1>What did you find?</h1>
      <button onClick={() => { setBusinessForm(true); setProductForm(false) }}>A shop</button>
      <button onClick={() => { setBusinessForm(true); setProductForm(false) }}>A bar/restaurant</button>
      <button onClick={() => { setBusinessForm(false); setProductForm(true) }}>A product</button>
      {businessForm && <AddBusinessForm />}
      {productForm && <AddProductForm />}
    </div>
  );
}

export default AddContent;
