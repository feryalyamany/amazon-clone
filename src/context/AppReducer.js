export const getCartTotal= (cart)=>{
   return cart.reduce((amount, item )=>{
     return amount + item.price
    },0)
  }

export const intialState= {
    cart: [],
    user: null
}

const AppReducer = (state=intialState, action)=>{
    switch(action.type){
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            }

         case "ADD_TO_CART":
            return {
                ...state,
                cart:[...state.cart, action.item]
            }

            case "REMOVE_FROM_CART":
                const index= state.cart.findIndex((cartItem)=> cartItem.id === action.id);
                const newCart= [...state.cart];
                if(index >= 0){
                    newCart.splice(index, 1)
                }
                else {
                    console.warn(`can't remove item {id ${action.id} as it's not in the cart!}`);
                }
                return {
                    ...state,
                    cart:newCart,
                }

                case "EMPTY_CART": 
                return {
                    ...state,
                    cart:[],
                }
            default:
             return state
            }
    }




export default AppReducer;