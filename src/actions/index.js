// we'll need axios
import axios from "axios";

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
import * as AT from "./actionTypes";

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

export const getChars = () => dispatch => {
  dispatch({ type: AT.FETCHING_CHARACTERS });
  axios
    .get("https://swapi.co/api/people/")
    .then(res =>
      dispatch({ type: AT.FETCHING_SUCCESS, payload: res.data.results })
    )
    .catch(err => dispatch({ type: AT.FETCHING_FAILURE, payload: err }));
};
