import { GET_FOOD_LIST,GET_FOOD } from "./food.type";

const initialState = {
  foodList : [],
};

const foodReducer = (state = initialState,action) =>{
  switch (action.type) {
    case GET_FOOD_LIST:
    return {
      ...state,
      foodList : action.payload,
    }

    default:
    return {
      ...state
    }
  }
}

export default foodReducer;