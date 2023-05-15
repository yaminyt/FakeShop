
import {combineReducers} from "redux";
import { productsReducer,selectedProductsReducer } from "./productReducers";


const allreducers = combineReducers({
    allProducts: productsReducer,
    product: selectedProductsReducer,
});

export default allreducers;
