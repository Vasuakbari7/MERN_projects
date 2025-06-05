import {v2 as cloudinary} from 'cloudinary';
const CLOUDINARY_NAME = 'dilgevk8i';
const CLOUDINARY_API_KEY = '775561621976132';
const CLOUDINARY_SECRET_KEY = '4E8vKA5MqXiscM7INdJlqDNHqq0';

const connectCloudinary = async () => {

  cloudinary.config({
    cloud_name: CLOUDINARY_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_SECRET_KEY
  })
}

export default connectCloudinary;