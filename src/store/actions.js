



export function addToCart(Produto){
    return{type: ADD_TO_CART, Produto}
}
export const types = {
    
    ADD_TO_CART: 'ADD_TO_CART',
    REM_FR_CART: "REM_FR_CART"
  }
  
  export const actions = {
    addToCart: () => ({ type: types.ADD_TO_CART, Produto })
  }
  