import  express  from "express";

import { FoodModel } from "../../database/allModules";
import { validateCategory, validateID } from "../../validation/common.validation";

const Router = express.Router();

/**
 * Route     /
 * Des       Create New Food Item
 * Params    none
 * Access    Public
 * Method    POST
 */
// Homework

Router.post("/",async(req,res) => {
  try {
    const food = await FoodModel.create(req.body);
    return res.status(200).json({ food })
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
})
/** 
 * Route  : /:_id
 * Des    : Get Food based on id
 * Params : _id
 * Access : Public
 * Method : GET
*/

Router.get("/:_id", async(req,res) => {
  try {
    const { _id } = req.params;
    await validateID(req.params);
    const food = await FoodModel.findById(_id);
    return res.status(200).json({ food });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/** 
 * Route  : /r/:_id
 * Des    : Get all Foods  of a particular Restaurent based on Restaurant id
 * Params : _id (estaurant id)
 * Access : Public
 * Method : GET
*/

Router.get("/r/:_id", async (req,res) =>{
  try {
    const { _id } = req.params;
    await validateID(req.params);
    const foods = await FoodModel.find({
      restaurant : _id
    });
    return res.status(200).json({ foods })
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
   * Route   : /c/:category
   * Des     : Get all foods based on Particular category
   * Params  : category
   * Access  : Public
   * Method  : GET
 */
 Router.get("/c/:category", async (req,res) =>{
  try {
    const { category } = req.params;
    await validateCategory(req.params);
    const foods = await FoodModel.find({
      category : {$regex : category,$options : "i"}
    });
    if(!foods)
      return res
      .status(404)
      .json({error : `No Food Matched with ${category}`})

    return res.status(200).json({ foods });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});



export default Router;