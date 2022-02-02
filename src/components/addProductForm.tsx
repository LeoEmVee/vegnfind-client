import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import styles from './addBusinessForm.module.css'
import { uploadImage } from '../services/cloudinary.service';

function AddProductForm() {

  const [previewSource, setPreviewSource] = useState('');

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  }

  const previewFile = (file: Blob) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    }
  }

  const validation = Yup.object({
    name: Yup.string()
      .min(2, 'Name must be at least 2 characters')
      .max(25, 'Name must be 25 characters max')
      .required('Name is required'),
    brand: Yup.string(),
    category: Yup.string()
      .required('At least one category is required'),
    description: Yup.string()
      .min(5, 'Description must be at least 5 charaters')
      .max(255, 'Description must be 255 characters max')
      .required('Description pic is required'),
  });

  validation.validate;


  return (
    <Formik
      initialValues={{
        name: '',
        brand: '',
        category: '',
        description: '',
        picture: '',
      }}
      validationSchema={validation}
      onSubmit={async (values, { resetForm }) => {

        // const uploadedPic = await uploadImage(previewSource);
        console.log(previewSource);

        // values = {
        //   ...values,
        //   picture: uploadedPic
        // }
        // console.log(values);

        // await createProduct(values);


        resetForm();
        setPreviewSource('');
      }}>

      {formik => (
        <form className={styles.addbusinessform} onSubmit={formik.handleSubmit}>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="What is the name of the place?"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}

          <input
            id="brand"
            name="brand"
            type="text"
            placeholder="Does it belong to a brand/chain?"
            onChange={formik.handleChange}
            value={formik.values.brand}
          />
          {formik.touched.brand && formik.errors.brand ? (
            <div>{formik.errors.brand}</div>
          ) : null}

          <input
            id="category"
            name="category"
            type="category"
            placeholder="Enter a category"
            onChange={formik.handleChange}
            value={formik.values.category}
          />
          {formik.touched.category && formik.errors.category ? (
            <div>{formik.errors.category}</div>
          ) : null}

          <textarea
            id="description"
            name="description"
            placeholder="Describe the place, please"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
          {formik.touched.description && formik.errors.description ? (
            <div>{formik.errors.description}</div>
          ) : null}

          <input
            className="addbusinessfileinput"
            id="fileUpload"
            name='picture'
            onChange={handleFileInputChange}
            type='file'
            value={formik.values.picture}
          />
          {formik.touched.picture && formik.errors.picture ? (
            <div>{formik.errors.picture}</div>
          ) : null}

          {previewSource && (<div className={styles.imgwrap}><img src={previewSource} alt="Business Main Pic"></img></div>)}

          <button type="submit">Submit</button>

        </form>
      )}
    </Formik>
  );
}

export default AddProductForm;
