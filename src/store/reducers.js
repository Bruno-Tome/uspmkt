

import { combineReducers } from 'redux'
import { ADD_TO_CART } from './actions'


function addToCart(state = initialState,action){
    if(action === ADD_TO_CART){
        return Object.assign(
            {}, state, {}
            
        )
    }else{
        return state
    }

    
}

const CART = combineReducers({
  addToCart
})

export default todoApp

//react-native paper