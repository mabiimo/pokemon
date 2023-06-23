import React, { createContext, useState } from "react";

export const CollectionContext = createContext();

export const CollectionProvider = ({ children }) => {
  const [collection, setCollection] = useState([]);

  const addToCollection = (pokemon) => {
    setCollection((prevCollection) => [...prevCollection, pokemon]);
  };

  const removeFromCollection = (pokemon) => {
    setCollection((prevCollection) => prevCollection.filter((p) => p.name !== pokemon.name));
  };

  return <CollectionContext.Provider value={{ collection, addToCollection, removeFromCollection }}>{children}</CollectionContext.Provider>;
};
