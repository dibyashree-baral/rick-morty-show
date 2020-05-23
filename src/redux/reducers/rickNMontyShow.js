import {
  GET_CHARACTERS_SUCCESS,
  GET_CHARACTERS_FAILED,
  SORT_IN_ASCENDING_ORDER,
  SORT_IN_DESCENDING_ORDER,
} from "../constants/index";

const initialState = {
  charactersListDetails: {
    currentResultList: [],
    totalList: [],
    info: {},
    sortingOrder: ''
  },
};

export const getCharactersList = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_CHARACTERS_SUCCESS:
      return Object.assign({}, state, {
        charactersListDetails: {
          currentResultList: action.payload.results,
          totalList: [
            ...state.charactersListDetails.totalList,
            ...action.payload.results,
          ],
          info: action.payload.info,
        },
      });
    case GET_CHARACTERS_FAILED:
      return Object.assign({}, state, {
        charactersListDetails: {
          currentResultList: [],
          totalList: [...state.charactersListDetails.totalList],
          info: {},
          error: action.payload.response.data.error,
        },
      });
    case SORT_IN_ASCENDING_ORDER:
      return Object.assign({}, state, {
        charactersListDetails: {
          currentResultList: state.charactersListDetails.currentResultList.sort(
            (a, b) => a.id - b.id
          ),
          totalList: [...state.charactersListDetails.totalList],
          info: state.charactersListDetails.info,
          sortingOrder: 'Ascending'
        },
      });
    case SORT_IN_DESCENDING_ORDER:
      return Object.assign({}, state, {
        charactersListDetails: {
          currentResultList: state.charactersListDetails.currentResultList.sort(
            (a, b) => b.id - a.id
          ),
          totalList: [...state.charactersListDetails.totalList],
          info: state.charactersListDetails.info,
          sortingOrder: 'Descending'
        },
      });
    default:
      return state;
  }
};
