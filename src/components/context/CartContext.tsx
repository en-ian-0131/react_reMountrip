import { createContext, useReducer } from "react";
import { initialization } from "../Reducer/CartReducer";
import { CartReducer } from "../Reducer/CartReducer";

export const CartContext = createContext(initialization);

export const CartProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(CartReducer, initialization);
  const { cartItem, quantity } = state;

  console.log("state:", state);
  console.log("cartItem:", cartItem);

  const addItem = (item:any,count:number) => {
    // const newA:number = cartItem.map((v:any)=>{
    //   if(v.sid === item.sid){
    //     return quantity + count
    //   }else{
    //     return count
    //   }
    // })


    const newItem = [...cartItem, item];
    const newQuantity:number = quantity + count;
    dispatch({
      type: "AddItem",
      payload: { newItem: newItem, newQuantity: newQuantity },
    });
  };

  const value: any = {
    cartState: state,
    addItem: addItem,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
