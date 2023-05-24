import cloudinary from "@/util/cloudinary";
import formidable from "formidable";

export const config = {
  api: {
    bodyParser: false,
  },
};
export default async function handler(req, res) {
  const form = new formidable.IncomingForm();
  form.parse(req, (err, fields, files) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error uploading file.");
      return;
    }
    const file = files.images;
    cloudinary.v2.uploader
      .upload(file.filepath)
      .then((result) => res.status(302).json(result.url));
  });
}
