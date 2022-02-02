const cloudinary = require('cloudinary');

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
});

export async function uploadImage(file) {
  return await cloudinary.uploader.upload(file, {
    upload_preset: 'ml_default',
  });
}

export default cloudinary;
