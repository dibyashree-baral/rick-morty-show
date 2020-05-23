import {
  GET_CHARACTERS_SUCCESS,
  GET_CHARACTERS_FAILED,
  SORT_IN_ASCENDING_ORDER,
  SORT_IN_DESCENDING_ORDER,
} from "../constants/index";
import axios from "axios";

export const getCharactersListSuccess = (res) => {
  return {
    type: GET_CHARACTERS_SUCCESS,
    payload: res.data,
  };
};

export const getCharactersListFailed = (err) => {
  return {
    type: GET_CHARACTERS_FAILED,
    payload: err,
  };
};

export const getCharactersList = (url, params, sortingType) => {
  return (dispatch) => {
    return getCharactersApi(url, params)
      .then((response) => {
        dispatch(getCharactersListSuccess(response));
        dispatch(getSortedList(sortingType));
      })
      .catch((error) => {
        dispatch(getCharactersListFailed(error));
      });
  };
};

export const getSortedList = (sortType) =>
  sortType === "Descending"
    ? {
        type: SORT_IN_DESCENDING_ORDER,
      }
    : {
        type: SORT_IN_ASCENDING_ORDER,
      };

function getCharactersApi(url, params) {
  return axios.get(url, {
    params,
  });
}
