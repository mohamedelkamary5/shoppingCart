import {createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import cartReduc from './reducers/index'
import throttle from 'lodash.throttle';
function loadState() {
    try {
        const state = localStorage.getItem('cart')

        if(state !== null) {
            return JSON.parse(state)
        }
    } catch (error) {
        console.log("Error", error);   
    }

    return {
        cart: []
    }
}
function saveState(state) {
    console.log("sava local");
    localStorage.setItem('cart', JSON.stringify(state));
}


const store = createStore(cartReduc, loadState(), compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    
));

store.subscribe(throttle(() => {
    saveState(store.getState())
}, 2000))

export default store






// import {createStore, compose, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import cartReduer from "./reducers";
// import throttle from 'lodash.throttle';

// function loadState(){
//     try{
//         const state = localStorage.getItem('cart');

//         if(state !== null){
//             return JSON.parse(state);
//         }        
//     } catch(e){
//         // ignore errors
//     }

//     return {
//         cart: []
//     };
// }

// function saveState(state){
//     console.log('saveState..')
//     localStorage.setItem('cart', JSON.stringify(state));
// }

// const store = createStore(cartReduer, loadState(), compose(
//     applyMiddleware(thunk),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// ));

// store.subscribe(throttle(() => {
//     saveState(store.getState());
// }, 2000));

// export default store;