import ActionTypes from '../constants/ActionTypes';
import axios from 'axios';
const ProductURL = "../mock_data/products.json";

export function fetchProducts(){
  return function(dispatch){
      axios.get(ProductURL)
          .then((response) => {
              dispatch({type:ActionTypes.FETCH_PRODUCTS_SUCCESS, payload:response.data});
          })
          .catch((err) => {
              dispatch({type:ActionTypes.FETCH_PRODUCTS_ERROR, payload:err});
          })
  }
}


export const fetchProductsBegin = () => ({
    type: ActionTypes.FETCH_PRODUCTS_BEGIN
});
  
export const fetchProductsSuccess = products => ({
    type: ActionTypes.FETCH_PRODUCTS_SUCCESS,
    payload: { products }
});

export const fetchProductsError = error => ({
    type: ActionTypes.FETCH_PRODUCTS_ERROR,
    payload: { error }
});



