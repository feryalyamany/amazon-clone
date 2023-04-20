import { createContext, useReducer, useContext } from "react"
import { intialState } from "./AppReducer";
import AppReducer from "./AppReducer";

const GlobalContext = createContext();
const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, intialState);
    return (
        <GlobalContext.Provider value={{cart: state.cart, user: state.user, dispatch:dispatch}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider

export const useAuth = ()=>{
   return useContext(GlobalContext)
};