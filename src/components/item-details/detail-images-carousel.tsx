import React, { SetStateAction, useState } from 'react';
import { updateImageToItem, getCloudinaryUrl } from '../../services/axios.service';
import styles from './detail-images-carousel.module.css'
import { Formik } from 'formik';
import IconCross from '../../assets/icons/icon-cross.svg'
import { useAppSelector } from '../../redux/store';

function DetailImagesCarousel({ item, setShouldRender, images, shouldRender }) {

  const [previewSource, setPreviewSource] = useState('');
  const [newPic, setNewPic] = useState('');
  const { authorized } = useAppSelector(state => state.loginReducer);

  const handleFileInputChange = (e: any) => {
    document.getElementById("Button").disabled = false;
    const file = e.target.files[0];
    previewFile(file);
  }

  const previewFile = (file: Blob) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource((): SetStateAction<any> => {
        return reader.result;
      });
    };
  };

  const deletePic = async (url: string) => {
    const removeImgObj = { id: item.id, url: url }
    await updateImageToItem(removeImgObj);
    setShouldRender(!shouldRender);
  }

  return (
    <div className={styles.carouselwrap}>
      <img src={item.thumbImg} alt="Main pic" />
      {images && images.map(pic => <div key={pic} className={styles.imgDeletewrap}><img src={pic} alt="Another pic"></img>{authorized && <button type="button" onClick={() => deletePic(pic)} className={styles.deletePic}><IconCross /></button>}</div>)}
      {authorized && <Formik
        initialValues={{
          newPic: '',
        }}
        onSubmit={async (values, { resetForm }) => {
          const newFile = { data: previewSource };
          const uploadedPic = await getCloudinaryUrl(newFile);
          const picUrl = uploadedPic.data.secure_url;
          console.log("PICURL", picUrl);

          const addImgObj = { id: item.id, url: picUrl }
          console.log("addIMGOBJ", addImgObj);
          await updateImageToItem(addImgObj);

          setShouldRender(!shouldRender);
          document.getElementById("Button").disabled = true;
          setPreviewSource('');
          setNewPic('');
          resetForm();
        }}>
        {formik => (

          <form className={styles.newPicForm} style={{ backgroundImage: `url(${previewSource})` }} onSubmit={formik.handleSubmit}>

            <label className={styles.addpicturelabel} htmlFor="newPic">Add another pic</label>

            <input
              className={styles.addfileinput}
              id="newPic"
              name="newPic"
              onChange={handleFileInputChange}
              type="file"
              value={newPic}
            />

            {formik.touched.newPic && formik.errors.newPic ? (
              <div>{formik.errors.newPic}</div>
            ) : null}

            <button id="Button" type="submit" className={styles.newPicFormButton} disabled>+ Add</button>

          </form>
        )}
      </Formik>}
    </div>
  );
}

export default DetailImagesCarousel;
