import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import styles from './addBusinessForm.module.css'

function AddBusinessForm() {

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
    telephone: Yup.number()
      .min(2, 'Telephone must be at least 6 characters')
      .max(20, 'Telephone must be 15 characters max'),
    email: Yup.string()
      .email('Please enter valid e-mail address (name@exampledomain.com'),
    webiste: Yup.string(),
    description: Yup.string()
      .min(5, 'Description must be at least 5 charaters')
      .max(255, 'Description must be 255 characters max')
      .required('Description pic is required'),
    address: Yup.string()
      .required('Adress is required'),
    zipCode: Yup.string()
      .required('ZipCode is required'),
    city: Yup.string()
      .required('City is required'),
    region: Yup.string(),
    country: Yup.string()
      .required('Country is required'),
    latitude: Yup.number()
      .required('Latitude is required'),
    longitude: Yup.number()
      .required('Longitude is required'),

  });

  validation.validate;


  return (
    <Formik
      initialValues={{
        name: '',
        brand: '',
        category: '',
        telephone: '',
        email: '',
        website: '',
        description: '',
        address: '',
        zipCode: '',
        city: '',
        region: '',
        country: '',
        latitude: '',
        longitude: '',
        picture: '',
      }}
      validationSchema={validation}
      onSubmit={(values, { resetForm }) => {
        console.log(JSON.stringify(values, null, 2));
        resetForm();
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

          <input
            id="telephone"
            name="telephone"
            type="text"
            placeholder="Do you know its contact telephone number?"
            onChange={formik.handleChange}
            value={formik.values.telephone}
          />
          {formik.touched.telephone && formik.errors.telephone ? (
            <div>{formik.errors.telephone}</div>
          ) : null}

          <input
            id="email"
            name="email"
            type="email"
            placeholder="Do you know its e-mail?"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}

          <input
            id="website"
            name="website"
            type="text"
            placeholder="Do you know its website?"
            onChange={formik.handleChange}
            value={formik.values.website}
          />
          {formik.touched.website && formik.errors.website ? (
            <div>{formik.errors.website}</div>
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
            id="address"
            name="address"
            type="text"
            placeholder="What's the street and number?"
            onChange={formik.handleChange}
            value={formik.values.address}
          />
          {formik.touched.address && formik.errors.address ? (
            <div>{formik.errors.address}</div>
          ) : null}

          <input
            id="zipCode"
            name="zipCode"
            type="text"
            placeholder="Enter the ZIP Code"
            onChange={formik.handleChange}
            value={formik.values.zipCode}
          />
          {formik.touched.zipCode && formik.errors.zipCode ? (
            <div>{formik.errors.zipCode}</div>
          ) : null}

          <input
            id="city"
            name="city"
            type="text"
            placeholder="Enter the city"
            onChange={formik.handleChange}
            value={formik.values.city}
          />
          {formik.touched.city && formik.errors.city ? (
            <div>{formik.errors.city}</div>
          ) : null}

          <input
            id="region"
            name="region"
            type="text"
            placeholder="Enter the region"
            onChange={formik.handleChange}
            value={formik.values.region}
          />
          {formik.touched.region && formik.errors.region ? (
            <div>{formik.errors.region}</div>
          ) : null}

          <input
            id="country"
            name="country"
            type="text"
            placeholder="Enter the country"
            onChange={formik.handleChange}
            value={formik.values.country}
          />
          {formik.touched.country && formik.errors.country ? (
            <div>{formik.errors.country}</div>
          ) : null}

          <input
            id="latitude"
            name="latitude"
            type="text"
            placeholder="Enter the latitude"
            onChange={formik.handleChange}
            value={formik.values.latitude}
          />
          {formik.touched.latitude && formik.errors.latitude ? (
            <div>{formik.errors.latitude}</div>
          ) : null}

          <input
            id="longitude"
            name="longitude"
            type="text"
            placeholder="Enter the longitude"
            onChange={formik.handleChange}
            value={formik.values.longitude}
          />
          {formik.touched.longitude && formik.errors.longitude ? (
            <div>{formik.errors.longitude}</div>
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

export default AddBusinessForm;
