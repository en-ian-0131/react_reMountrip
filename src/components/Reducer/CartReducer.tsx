import {
  CartInitialType,
  CartAction,
  ProviderValue,
} from "../interface/MountripInterface";

export const initialization: CartInitialType = {
  cartItem: [],
  quantity: 0,
};

export const CartReducer = (state: ProviderValue, action: CartAction): any => {
  const { payload, type } = action;
  switch (type) {
    case "AddItem":
      return {
        ...state,
        cartItem: payload.newItem,
        quantity: payload.newQuantity,
      };
    default:
      return { ...state };
  }
};
