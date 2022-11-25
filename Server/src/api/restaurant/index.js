import  express  from "express";

import { RestaurantModel } from "../../database/allModules";
import { ValidateRestaurantCity, ValidateSearchString } from "../../validation/restaurant.validation";

const Router = express.Router();

/**
 * Route     /
 * Des       Add new Restaurant to database
 * Params    none
 * Access    Public
 * Method    POST
 */

Router.post("/", async(req,res) => {
  try {
    const restaurant = await RestaurantModel.create(req.body);
    return res.status(200).json({ restaurant });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
})

/** 
 * Route  : /
 * Des    : Get all the Restaurents details based on city
 * Params : none
 * Access : Public
 * Method : GET
*/

Router.get("/", async(req,res) => {
  try {
    // http://localhost:4000/restaurant/?city=hyderabad
    const { city } = req.query;
    // await ValidateRestaurantCity(req.query);
    const restaurants = await RestaurantModel.find({city})
    if(restaurants.length === 0){
      return res.status(404).json({ error : "No restaurent found in this city."})
    }
    return res.status(200).json({ restaurants})
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/** 
 * Route  : /:_id
 * Des    : Get a Restaurent details based on id
 * Params : _id
 * Access : Public
 * Method : GET
*/

Router.get("/:_id", async(req,res) => {
  try {
    
    const { _id } = req.params;
    const restaurant = await RestaurantModel.findById({_id});
    if(!restaurant){
      return res.status(404).json({ error : "Restaurent not found"})
    }
    return res.status(200).json({ restaurant})
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * Route     /search/:searchString
 * Des       Get restaurants details based on search string
 * Params    searchString
 * Access    Public
 * Method    GET
 */

/**
   * searchString = Raj
   * results = {
   *  RajHotel
   *  RajRow
   *  RonRaj
   *  raJRow
   * }
*/
 Router.get("/search/:searchString", async (req, res) => {
  try {
    const { searchString } = req.params;
    // await ValidateSearchString(req.params);
    const restaurants = await RestaurantModel.find({
      name : { $regex : searchString, $options : "i"}
    });
    if(!restaurants.length === 0 ){
      return res
      .status(404)
      .json({ error: `No restaurant matched with ${searchString}` });
    }
    return res.json({ restaurants });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;