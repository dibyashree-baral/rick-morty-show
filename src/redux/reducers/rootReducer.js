import { combineReducers } from "redux";
import { getCharactersList } from "./rickNMontyShow";

const rootReducer = combineReducers({
  getCharactersList,
});

export default rootReducer;
