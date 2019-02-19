import ActionTypes from '../constants/ActionTypes';

const initialState = {
   items: [],
   loading:false,
  error: null
}

export default function productsreducer(state = initialState, action){

    switch(action.type){
        case ActionTypes.FETCH_PRODUCTS_BEGIN: {
            return {
                ...state,
                loading: true,
                error: null
            }
        }
        case ActionTypes.FETCH_PRODUCTS_SUCCESS:{
            return {
                ...state,
                loading: false,
                items: action.payload
            };
        }
        case ActionTypes.FETCH_PRODUCTS_ERROR:{
            return {
                ...state,
                loading: false,
                error: action.payload,
                
            }
        }
        default:
        return state;
    }
}