import { combineReducers } from "redux";
import BasketReducer from "./BasketReducer";

const rootReducer = combineReducers({
    productState: BasketReducer,
});

export default rootReducer