import joi from "joi";
import { Schema } from "mongoose";

export const ValidateRestaurantCity = (restaurantOject) => {
  const Schema = joi.object({
    city : joi.string().required
  });
  return Schema.validateAsync(restaurantOject);
};

export const ValidateSearchString= (searchString) => {
  const Schema = joi.object({
    city : joi.string().required
  })
  return Schema.validateAsync(searchString)
}
