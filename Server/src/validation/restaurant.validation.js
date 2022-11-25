import joi from "joi";

export const ValidateRestaurantCity = (restaurantOject) => {
  const Schema = joi.object({
    city : joi().string().required()
  });
  return Schema.validateAsync(restaurantOject);
};

export const ValidateSearchString= (searchString) => {
  const Schema = joi.object({
    city : joi().string().required()
  })
  return Schema.validateAsync(searchString)
}
