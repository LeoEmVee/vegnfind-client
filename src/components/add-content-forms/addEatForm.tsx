import React, { SetStateAction, useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import styles from './add-item-form.module.css';
import { getCloudinaryUrl, createEat } from '../../services/axios.service';
import { useRouter } from 'next/router';

function AddEatForm() {
  const [previewSource, setPreviewSource] = useState('');
  const [isVegan, setIsVegan] = useState(false);
  const router = useRouter();
  const [fullVegan, setFullVegan] = useState(false);
  const [partVegan, setPartVegan] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggleFullVegan = () => {
    if (partVegan) setPartVegan(false);
    setFullVegan(!fullVegan);
  };

  const togglePartVegan = () => {
    if (fullVegan) setFullVegan(false);
    setPartVegan(!partVegan);
  }

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
    telephone: Yup.number(),
    email: Yup.string().email(
      'Please enter valid e-mail address (name@exampledomain.com',
    ),
    webiste: Yup.string(),
    description: Yup.string()
      .min(5, 'Description must be at least 5 charaters')
      .max(255, 'Description must be 255 characters max')
      .required('Description pic is required'),
    address: Yup.string().required('Adress is required'),
    zipCode: Yup.string().required('ZipCode is required'),
    city: Yup.string().required('City is required'),
    region: Yup.string(),
    country: Yup.string().required('Country is required'),
    latitude: Yup.number().required('Latitude is required'),
    longitude: Yup.number().required('Longitude is required'),
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
        thumbImg: '',
      }}
      validationSchema={validation}
      onSubmit={async (values, { resetForm }) => {
        setIsLoading(true);
        const locationObject = {
          address: values.address,
          zipCode: values.zipCode,
          city: values.city,
          region: values.region,
          country: values.country,
          latitude: values.latitude,
          longitude: values.longitude
        }

        const picToUpload = { data: previewSource };
        const newPic = await getCloudinaryUrl(picToUpload);

        const eatObject = {
          isVegan: isVegan,
          name: values.name,
          description: values.description,
          brand: { name: values.brand },
          category: { name: values.category },
          telephone: values.telephone,
          website: values.website,
          email: values.email,
          location: locationObject,
          thumbImg: newPic.data.secure_url
        }

        await createEat(eatObject);

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
            placeholder="What is the name of the place?*"
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
            placeholder="Does it belong to a brand/chain? Name it!"
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

          <input
            className={styles.additeminput}
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
            className={styles.additeminput}
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
            className={styles.additeminput}
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
            className={styles.additemtextarea}
            id="description"
            name="description"
            placeholder="Describe the place, please*"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
          {formik.touched.description && formik.errors.description ? (
            <div>{formik.errors.description}</div>
          ) : null}

          <h3>Location*</h3>

          <section className={styles.adressfirstlinewrap}>
            <input
              className={`${styles.additeminput} ${styles.twothirds}`}
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
              className={`${styles.additeminput} ${styles.onethird}`}
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
          </section>

          <div className={styles.adresssecondlinewrap}>
            <input
              className={`${styles.additeminput} ${styles.onethird}`}
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
              className={`${styles.additeminput} ${styles.onethird}`}
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
              className={`${styles.additeminput} ${styles.onethird}`}
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
          </div>

          <h4>Coordenates*</h4>

          <div className={styles.coordenateswrap}>
            <input
              className={`${styles.additeminput} ${styles.onehalf}`}
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
              className={`${styles.additeminput} ${styles.onehalf}`}
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
          </div>

          <h3>Is it fully vegan?*</h3>

          <div className={styles.buttonswrap}>
            <button
              className={fullVegan ? styles.isveganbuttonactive : styles.isveganbutton}
              type="button"
              onClick={() => { setIsVegan(true); toggleFullVegan() }}>
              100% vegan
            </button>
            <button
              className={partVegan ? styles.isveganbuttonactive : styles.isveganbutton}
              type="button"
              onClick={() => { setIsVegan(false); togglePartVegan() }}>
              Offers vegan options
            </button>
          </div>

          <h3>Choose a main picture*</h3>

          <label className={styles.addpicturelabel} htmlFor="fileUpload">Load picture</label>

          <input
            className={styles.addfileinput}
            id="fileUpload"
            name="picture"
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
          <p className={styles.disclaimer}>Please double check all the previous information is true</p>
          {isLoading ? <button className={styles.submitformbuttoninactive} type="submit" disabled>Please wait...</button> : <button className={styles.submitformbutton} type="submit">Submit</button>}
        </form>
      )}
    </Formik>
  );
}

export default AddEatForm;
