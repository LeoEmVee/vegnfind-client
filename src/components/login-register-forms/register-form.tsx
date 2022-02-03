import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import styles from './logregform.module.css'
import { getCloudinaryUrl, submitRegisterForm } from '../../services/axios.service';

function RegisterForm() {

  const [previewSource, setPreviewSource] = useState('');

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
    firstName: Yup.string()
      .min(2, 'First name must be at least 2 characters')
      .max(15, 'First name must be 15 characters max')
      .required('First name is required'),
    lastName: Yup.string()
      .min(2, 'Last name must be at least 2 characters')
      .max(20, 'Last name must be 20 characters max')
      .required('Last name is required'),
    email: Yup.string()
      .email('Please enter valid e-mail address (name@exampledomain.com')
      .required('e-mail address is required'),
    userName: Yup.string()
      .min(2, 'Username must be at least 2 characters')
      .max(20, 'Username must be 20 characters max')
      .required('Username is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
  });

  validation.validate;
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: '',
        profilePic: '',
      }}
      validationSchema={validation}
      onSubmit={async (values, { resetForm }) => {
        const newFile = { data: previewSource };
        const uploadedPic = await getCloudinaryUrl(newFile);

        values = {
          ...values,
          profilePic: uploadedPic.data.secure_url,
        };
        console.log(values);

        const newUser = await submitRegisterForm(values);
        console.log(newUser);

        resetForm();
        setPreviewSource('');
      }}>
      {formik => (
        <form className={styles.registerform} onSubmit={formik.handleSubmit}>
          <input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="What is your first name?"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div>{formik.errors.firstName}</div>
          ) : null}

          <input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="What is your last name?"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div>{formik.errors.lastName}</div>
          ) : null}

          <input
            id="email"
            name="email"
            type="email"
            placeholder="What is your e-mail?"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}

          <input
            id="username"
            name="username"
            type="text"
            placeholder="Enter your username"
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          {formik.touched.username && formik.errors.username ? (
            <div>{formik.errors.username}</div>
          ) : null}

          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}

          <input
            className="addbusinessfileinput"
            id="profilePic"
            name="profilePic"
            onChange={handleFileInputChange}
            type="file"
            value={formik.values.profilePic}
          />
          {formik.touched.profilePic && formik.errors.profilePic ? (
            <div>{formik.errors.profilePic}</div>
          ) : null}

          {previewSource && (
            <div className={styles.imgwrap}>
              <img src={previewSource} alt="Business Main Pic"></img>
            </div>
          )}

          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
}

export default RegisterForm;
