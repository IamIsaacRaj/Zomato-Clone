import express from "express";
import AWS from "aws-sdk";
import multer from "multer";
import {ImageModel} from "../../database/allModules";

import {S3Uploads} from "../../utils/S3.js"

const Router = express.Router();

// multer configuration
const storage = multer.memoryStorage();
const upload = multer({ storage });

/**
 * Route     /:_id
 * Des       Get image details
 * Params    _id
 * Access    Public
 * Method    GET
 */
Router.get("/:_id",async (req,res) => {
  try {
    const { _id } = req.params;
    const image = await ImageModel.findById(_id);
    // if(!image){
    //   return res.status(404).json({ error : "No Image Found" });
    // }
    return res.status(200).json({ image });
  } catch (error) {
    return res.status(500).json({ error : error.message });
  }
});

/**
 * Route     /:_id
 * Des       Upload given image to S3 bucket and save file link to  MongoDB
 * Params    none
 * Access    Public
 * Method    POST
 */

Router("/", upload.single('file'),async (req,res) => {
  try {
    const file = req.file;

    const bucketOptions = {
      Bucket : "Zomato_Clone",
      Key    : file.originalname,
      Body   : file.buffer,
      ContetType : file.mimetype,
      ACL : "public-read", //Acess Control list
    };

    const uploadImage = await S3Uploads(bucketOptions);
    const dbUpload = await ImageModel.create({
      images: [
        {
          location : uploadImage.location,
        },
      ],
    });
    return res.status(200).json({ dbUpload })
  } catch (error) {
    return res.status(500).json({ error : error.message });
  }
});

// Router("/", upload.array('file',4),async (req,res) => {
//   try {
//     const file = req.file;

//     const bucketOptions = {
//       Bucket : "Zomato_Clone",
//       Key    : file.originalname,
//       Body   : file.buffer,
//       ContetType : file.mimetype,
//       ACL : "public-read" //Acess Control list
//     };

//     const uploadImage = await S3Uploads(bucketOptions);
//     const dbUpload = await ImageModel.create({
//       images: [
//         {
//           location : uploadImage.location,
//         },
//       ],
//     });
//     return res.status(200).json({ dbUpload })
//   } catch (error) {
//     return res.status(500).json({ error : error.message });
//   }
// });

export default Router;
