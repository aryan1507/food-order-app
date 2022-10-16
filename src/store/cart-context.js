import React from 'react';

const CartContext = React.createContext({
  items: [],
  totalAmountBill: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {}
});
//dummy data for better autocompletion
export default CartContext;