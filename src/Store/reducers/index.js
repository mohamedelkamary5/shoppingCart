import {ADD_TO_CART, CLEAR_CARD, REMOVE_FROM_CARD} from './../actions/types'

export default function cartReduc(state, action) {
    console.log(state, action);
    switch(action.type) {
        case ADD_TO_CART: {
            return {
                cart: [
                    ...state.cart,
                    {
                        product: action.prodctInfo,
                        quantity: action.quantity,
                    
                    }
                ]
            }
        }
        case REMOVE_FROM_CARD: {
            const index_item = action.index
            const new_state = {...state}
            new_state.cart.splice(index_item, 1)
            return new_state
        }
        case CLEAR_CARD: {
            let new_state = {...state}
            new_state.cart = []
            return new_state 
        }
        default:
            return state
    }
}
