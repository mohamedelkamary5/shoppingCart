import {ADD_TO_CART, CLEAR_CARD, REMOVE_FROM_CARD} from './types'
export function addtocart(prodctInfo, quantity) {
    return{
        type: ADD_TO_CART,
        prodctInfo,
        quantity
    }
}

export function createRemoveFromCartAction(index){
    return{
        type: REMOVE_FROM_CARD,
        index,
    }
}

export function removeFromCart(index){
    return (dispatch) => {
    dispatch(createRemoveFromCartAction(index))        
    }
}

export function clearCard() {
    return{
        type: CLEAR_CARD
    }
}