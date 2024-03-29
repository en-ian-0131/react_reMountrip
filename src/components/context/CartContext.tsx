import { ReactNode, createContext, useReducer } from "react";
import { initialization } from "../Reducer/CartReducer";
import { CartReducer } from "../Reducer/CartReducer";
import { CartTotalData, FetchData } from "../interface/MountripInterface";

export const CartContext = createContext(initialization);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(CartReducer, initialization);
  const { cartItem } = state;

  console.log("state:", state);
  console.log("cartItem:", cartItem);

  const addItem = (item: FetchData, count: number) => {
    const newItem = [...cartItem, { ...item, count: count }];
    dispatch({
      type: "AddItem",
      payload: { newItem: newItem },
    });
  };

  const plusCount = (sid: number) => {
    const newCartItems = cartItem.map((row: CartTotalData) => {
      return row.sid === sid ? { ...row, count: row.count + 1 } : { ...row };
    });
    dispatch({
      type: "PlusCount",
      payload: { newItem: newCartItems },
    });
  };

  const minusCount = (sid: number) => {
    const newCartItems = cartItem.map((row: CartTotalData) => {
      return row.sid === sid
        ? { ...row, count: row.count === 1 ? 1 : row.count - 1 }
        : { ...row };
    });
    dispatch({
      type: "MinusCount",
      payload: { newItem: newCartItems },
    });
  };

  const removeItem = (sid: number) => {
    const newItems = cartItem.filter((row: CartTotalData) => row.sid !== sid);
    dispatch({
      type: "RemoveItem",
      payload: { newItem: newItems },
    });
  };

  const value: any = {
    cartState: state,
    addItem: addItem,
    plusCount: plusCount,
    minusCount: minusCount,
    removeItem: removeItem,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
