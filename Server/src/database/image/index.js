import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema(
  {
    images: [
      {
        location: { type: String, required: true },
      },
    ],
    name : { type: String }
  },
  {
    timestamps: true,
  }
);

export const ImageModel = mongoose.model("Images", ImageSchema);