import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "mrmogollon",
  api_key: "564279643437915",
  api_secret: "VETc0Ra6002zLa918A8jzCTxS9E",
});

export const uploadImage = async (filePath) => {
  return await cloudinary.uploader.upload(filePath, {
    folder: "posts",
  });
};

export const deleteImage = async (id_image) => {
  return await cloudinary.uploader.destroy(id_image);
};
