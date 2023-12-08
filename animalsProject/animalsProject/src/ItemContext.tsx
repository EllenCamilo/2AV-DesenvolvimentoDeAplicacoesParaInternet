// ItemContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from "react";

interface Item {
  nome: string;
  sobrenome: string;
  email: string;
  celular: string;
  senha: string;
  descricao: string;
  role: string;
}

interface ItemContextType {
  items: Item[];
  addItem: (item: Item) => void;
}

const ItemContext = createContext<ItemContextType | null>(null);

interface ItemProviderProps {
  children: ReactNode;
}

export const ItemProvider = ({ children }: ItemProviderProps) => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const storedItems = localStorage.getItem("items");
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const addItem = (item: Item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  return (
    <ItemContext.Provider value={{ items, addItem }}>
      {children}
    </ItemContext.Provider>
  );
};

export default ItemContext;
