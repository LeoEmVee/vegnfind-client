import React, { SetStateAction, useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import styles from './add-item-form.module.css';
import { createProduct, getCloudinaryUrl } from '../../services/axios.service';
import { useRouter } from 'next/router';

function AddProductForm() {
  const [previewSource, setPreviewSource] = useState('');
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleFileInputChange = (e: any) => {
    const file = e.target.files[0];
    previewFile(file);
  };

  const previewFile = (file: Blob) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource((): SetStateAction<any> => {
        return reader.result;
      });
    };
  };

  const validation = Yup.object({
    name: Yup.string()
      .min(2, 'Name must be at least 2 characters')
      .max(25, 'Name must be 25 characters max')
      .required('Name is required'),
    brand: Yup.string(),
    category: Yup.string().required('At least one category is required'),
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
        thumbImg: '',
      }}
      validationSchema={validation}
      onSubmit={async (values, { resetForm }) => {
        setIsLoading(true);
        const newFile = { data: previewSource };
        const uploadedPic = await getCloudinaryUrl(newFile);

        values = {
          ...values,
          brand: { name: values.brand },
          category: { name: values.category },
          thumbImg: uploadedPic.data.secure_url,
        };

        await createProduct(values);

        resetForm();
        setPreviewSource('');
        router.push('/user-dashboard');
      }}>
      {formik => (
        <form className={styles.additemform} onSubmit={formik.handleSubmit}>
          <h3>Details and description</h3>
          <input
            className={styles.additeminput}
            id="name"
            name="name"
            type="text"
            placeholder="What is the name of the product?*"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}

          <input
            className={styles.additeminput}
            id="brand"
            name="brand"
            type="text"
            placeholder="Does it belong to a brand? Name it!"
            onChange={formik.handleChange}
            value={formik.values.brand}
          />
          {formik.touched.brand && formik.errors.brand ? (
            <div>{formik.errors.brand}</div>
          ) : null}

          <input
            className={styles.additeminput}
            id="category"
            name="category"
            type="category"
            placeholder="Enter a category*"
            onChange={formik.handleChange}
            value={formik.values.category}
          />
          {formik.touched.category && formik.errors.category ? (
            <div>{formik.errors.category}</div>
          ) : null}

          <textarea
            className={styles.additemtextarea}
            id="description"
            name="description"
            placeholder="Describe the product, please*"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
          {formik.touched.description && formik.errors.description ? (
            <div>{formik.errors.description}</div>
          ) : null}

          <h3>Choose a main picture*</h3>

          <label className={styles.addpicturelabel} htmlFor="fileUpload">Load picture</label>

          <input
            className={styles.addfileinput}
            id="fileUpload"
            name="thumbImg"
            onChange={handleFileInputChange}
            type="file"
            value={formik.values.thumbImg}
          />
          {formik.touched.thumbImg && formik.errors.thumbImg ? (
            <div>{formik.errors.thumbImg}</div>
          ) : null}

          {previewSource && (
            <div className={styles.imgwrap}>
              <img src={previewSource} alt="Business Main Pic"></img>
            </div>
          )}

          <p className={styles.disclaimer}>Please, make sure this product is 100% vegan before submitting it!</p>

          {isLoading ? <button className={styles.submitformbuttoninactive} type="submit" disabled>Please wait...</button> : <button className={styles.submitformbutton} type="submit">Submit</button>}
        </form>
      )}
    </Formik>
  );
}

export default AddProductForm;
