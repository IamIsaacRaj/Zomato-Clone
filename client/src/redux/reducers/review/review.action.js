import axios from "axios";

// redux
import { GET_REVIEW, ADD_REVIEW } from "./review.type";

export const getReview = (resId) => async (dispatch) => {
  try {
    const reviewList = await axios({
      method: "GET",
      url: `${process.env.REACT_APP_CLIENT_URL}review/${resId}`,
    });

    return dispatch({ type: GET_REVIEW, payload: reviewList.data });
  } catch (error) {
    dispatch({ type: "ERROR", payload: error });
  }
};

export const addReview = (reviewData) => async (dispatch) => {
  try {
    await axios({
      method: "POST",
      url: `${process.env.REACT_APP_CLIENT_URL}review/new`,
      data: { reviewData },
    });

    return dispatch({ type: ADD_REVIEW, payload: reviewData });
  } catch (error) {
    dispatch({ type: "ERROR", payload: error });
  }
};