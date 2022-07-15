import React from 'react'
import { createContext,useContext,useReducer } from 'react'
import changeUpDown from './Reducer';

const Cart = createContext();
const Context = ({ children }) => {
    const initialState= 0;
    const [state, dispatch] = useReducer(changeUpDown, initialState);
  return (
    <>
         <Cart.Provider value={{ state,dispatch }}>
     {children}
   
     
    </Cart.Provider>
            
    </>
  )
}

export default Context
export const CartState = ()=>{
    return useContext(Cart)
}