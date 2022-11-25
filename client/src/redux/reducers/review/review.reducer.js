import { GET_REVIEW, ADD_REVIEW } from "./review.type";

const initialState = {
  reviews: {
    reviews: [],
  },
};

const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REVIEW:
      return {
        ...state,
        reviews: action.payload,
      };
    case ADD_REVIEW:
      return {
        ...state,
        reviews: {
          reviews: [action.payload, ...state.reviews.reviews],
        },
      };
    default:
      return {
        ...state,
      };
  }
};

export default reviewReducer;