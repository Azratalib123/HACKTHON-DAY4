
'use client';
import React, { createContext} from 'react';


// Define the shape of the cart state
interface CartState {
  items: any[]; // You can replace `any` with a more specific type for your items
}

// Initial state for the cart
const initialState: CartState = {
  items: [],
};

// Create the context for the cart
export const CartContext = createContext<any>(null);

// Reducer function to handle cart actions
export const cartReducer = (state: CartState, action: any): CartState => {
  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state, items: [...state.items, action.payload] };
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    case 'CLEAR_CART':
      return { ...state, items: [] };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};


// Custom hook to use the cart context