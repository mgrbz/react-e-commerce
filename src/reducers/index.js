import { combineReducers } from "redux";

import RProduct from "./RProducts";
import RUser from "./RUser";
import RCard from "./RCard";



export const rootReducer = combineReducers({
  RUser,
  RProduct,
  RCard
});