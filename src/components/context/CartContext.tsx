import { createContext, useReducer } from "react";
import { initialization } from "../Reducer/CartReducer";
import { CartReducer } from "../Reducer/CartReducer";

export const CartContext = createContext(initialization);

export const CartProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(CartReducer, initialization);
  const { cartItem } = state;

  console.log("state:", state);
  console.log("cartItem:", cartItem);
  
  const addItem = (item: string) => {
    console.log("item:", item);
    const newItem = [ ...cartItem, item ];
    dispatch({ type: "AddItem", payload: { newItem: newItem } });
  };

  const value: any = {
    cartState: state,
    addItem: addItem,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
