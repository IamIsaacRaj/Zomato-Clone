import express from "express";

import {MenuModel,ImageModel} from "../../database/allModules";

const Router = express.Router();

/**
 * Route     /
 * Des       Add menu to a restaurant
 * Params    none
 * Access    Public
 * Method    post
 */

Router.post("/", async(req,res) => {
  try {
    const menu = await MenuModel.create(req.body);
    return res.status(200).json({ menu });
  } catch (error) {
    return res.status(500).json({error : error.message});
  }
})

/**
 * Route     /list/:_id
 * Des       Get menu details based on menu id
 * Params    _id
 * Access    Public
 * Method    GET
 */

Router.get("/list/:_id", async (req,res) => {
  try {
    const {_id} = req.params;
    const {menus} = await MenuModel.findById(_id);

    if(!menus) {
      return res.status(404).json({error : "No menu present for this restaurent"});
    }
    return res.status(200).json({ menus });
  } catch (error) {
    return res.status(500).json({error : error.message});
  }
});

/**
 * Route     /image/:_id
 * Des       Get all list of menu images with id
 * Params    _id
 * Access    Public
 * Method    GET
 */

Router.get("/image/:_id", async (req,res) => {
  try {
    const { _id } = req.params;
    const menuImages = await ImageModel.findById(_id);

    if(!menuImages) {
      return res.status(404).json({message : "No Menu Images Found"})
    }
    return res.status(200).json({ menuImages})
  } catch (error) {
    return res.status(500).json({error : error.message});
  }
});

export default Router;