import {
  CartInitialType,
  CartAction,
  ProviderValue,
} from "../interface/MountripInterface";

export const initialization: CartInitialType = {
  cartItem: [],
};

export const CartReducer = (state: ProviderValue, action: CartAction): any => {
  const { payload, type } = action;
  switch (type) {
    case "AddItem":
      return { ...state, cartItem: payload.newItem };
    case "PlusCount":
      return { ...state, cartItem: payload.newItem };
    case "MinusCount":
      return { ...state, cartItem: payload.newItem };
    case "RemoveItem":
      return { ...state, cartItem: payload.newItem };
    case "CheckedItem":
      return { ...state, cartItem: payload.newItem };
    default:
      return { ...state };
  }
};
