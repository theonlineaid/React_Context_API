import React, {createContext, useState } from 'react'

// Define the type for the context value
type CartContextType = {
  items: { name: string; price: number; }[]; // Array type for items
  setItems: React.Dispatch<React.SetStateAction<{ name: string; price: number; }[]>>; // Setter function type
};

export const CartContext = createContext<CartContextType | null>(null);

export const CartProvider:  React.FC<React.PropsWithChildren<{}>>  = ({children}) => {

  const [items, setItems] = useState<{ name: string; price: number; }[]>([]);

  return (
    <CartContext.Provider value={{items, setItems}}>
        {children}
    </CartContext.Provider>
  )
}
