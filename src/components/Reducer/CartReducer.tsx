export const initialization: object = {
  cartItem: [],
};

export const CartReducer = (state: any, action: any): any => {
  console.log("ReducerState:", state);
  console.log("ReducerAction:", action);

  const { payload, type } = action;
  switch (type) {
    case "AddItem":
      return { ...state, cartItem: payload.newItem };
    default:
      return { ...state };
  }
};
