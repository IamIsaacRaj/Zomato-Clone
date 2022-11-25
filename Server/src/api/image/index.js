import express from "express";

import {ImageModel} from "../../database/allModules";


const Router = express.Router();

/**
 * Route     /:_id
 * Des       Get image details based on id 
 * Params    _id
 * Access    Public
 * Method    GET
 */
Router.get("/:_id",async (req,res) => {
  try {
    
    const image = await ImageModel.findById(req.params._id);
    if(!image){
      return res.status(404).json({ error : "No Image Found" });
    }
    return res.status(200).json({ image });
  } catch (error) {
    return res.status(500).json({ error : error.message });
  }
});

/**
 * Route     /
 * Des       save image link to mongoDB
 * Params    none
 * Access    Public
 * Method    POST
 */
 Router.post("/", async (req, res) => {
  try {

    const images = await ImageModel.create(req.body);

    return res.status(200).json({ images });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
