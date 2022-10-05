import  express  from "express";

import { FoodModel } from "../../database/allModules";
import { validateCategory, validateID } from "../../validation/common.validation";

const Router = express.Router();

/**
 * Route     /:_id
 * Des       Create New Food Item
 * Params    none
 * Access    Public
 * Method    POST
 */
// Homework

/**
 * Route     /:_id
 * Des       Create New Food Item
 * Params    none
 * Access    Public
 * Method    POST
 */
// Homework

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
    const food = FoodModel.findById(_id);
    return res.json({ food })
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/** 
 * Route  : /r/:_id
 * Des    : Get all Foods based on particular Restaurent
 * Params : _id
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
    return res.json({ foods })
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

    return res.json({ foods })
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});



export default Router;