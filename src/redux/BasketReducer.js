import { ADD_PRODUCT_TO_BASKET, REMOVE_PRODUCT_FROM_BASKET } from "./ActionTypes"

const initialState = {
    basketProducts: [],
}


const BasketReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_TO_BASKET:
            return {
                ...state,
                basketProducts: [...state.basketProducts, action.payload]
            }
        case REMOVE_PRODUCT_FROM_BASKET:
            return {
                ...state,
                basketProducts: [...state.basketProducts.filter((product) => product.id !== action.payload)]
            }
        default:
            return state;
    }
}


export default BasketReducer
