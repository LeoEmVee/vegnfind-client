import { useState } from 'react';
import AddShopForm from '../components/add-content-forms/addShopForm';
import AddEatForm from '../components/add-content-forms/addEatForm';
import AddProductForm from '../components/add-content-forms/addProductForm';
import Navbar from '../components/navbar/navbar';

function AddContent() {
  const [eatForm, setEatForm] = useState<boolean>(false);
  const [shopForm, setShopForm] = useState<boolean>(false);
  const [productForm, setProductForm] = useState<boolean>(false);

  return (
    <>
      <Navbar />
      <div className="add-content">
        <h1>What did you find?</h1>
        <button
          onClick={() => {
            setShopForm(true);
            setEatForm(false);
            setProductForm(false);
          }}>
          A shop
        </button>
        <button
          onClick={() => {
            setShopForm(false);
            setEatForm(true);
            setProductForm(false);
          }}>
          A bar/restaurant
        </button>
        <button
          onClick={() => {
            setShopForm(false);
            setEatForm(false);
            setProductForm(true);
          }}>
          A product
        </button>
        {shopForm && <AddShopForm />}
        {eatForm && <AddEatForm />}
        {productForm && <AddProductForm />}
      </div>
    </>
  );
}

export default AddContent;
