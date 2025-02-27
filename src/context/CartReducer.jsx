export const cartReducer = ( state, action ) => {

  switch (action.type) {
    case "ADD_ITEM": {
      const itemIndex = state.findIndex((cartItem) => cartItem.id === action.payload.id);

      if (itemIndex !== -1) {
        return state.map((cartItem, index) =>
          index === itemIndex ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }
    }

    case "REMOVE_ITEM": {
      return state
        .map((cartItem) =>
          cartItem.id === action.payload.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0); // Eliminar si cantidad llega a 0
    }

    default:
      return state;
  }
};
