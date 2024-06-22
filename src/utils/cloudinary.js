import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUDNAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    //*uploading file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    //*file uploaded sucessfully now
    console.log("File upload sucessfull", response.url);

    return response;
  } catch (error) {
    FileSystem.unlinkSync(localFilePath); //* removes the locally saved temporary file as the uploaded operation got failed
    return null;
  }
};

export { uploadOnCloudinary };
