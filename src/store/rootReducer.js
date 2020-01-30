import { combineReducers } from "redux";
import categories from "./reducers/categories/reducer";
import products from "./reducers/products/reducer";
export default combineReducers({
  products: products,
  categories: categories
  // we can add more "slice" subreducers here later on...
});
