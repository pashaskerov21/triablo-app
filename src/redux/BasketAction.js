import { ADD_PRODUCT_TO_BASKET, REMOVE_PRODUCT_FROM_BASKET } from "./ActionTypes"

export const addProductToBasket = (product) => {
    return{
        type: ADD_PRODUCT_TO_BASKET,
        payload: product,
    }
}

export const removeProductFromBasket = (id) => {
    return{
        type: REMOVE_PRODUCT_FROM_BASKET,
        payload: id,
    }
}