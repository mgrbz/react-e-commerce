import { combineReducers } from "redux";

import RProduct from "./RProducts";
import RUser from "./RUser";





export const rootReducer = combineReducers({
  RUser,
  RProduct
});