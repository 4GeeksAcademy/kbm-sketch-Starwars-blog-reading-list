import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import Card from "../components/Card"

export function Favorites() {
    const { store} = useGlobalReducer()
    return (
        <div className="container">
      <h2>Favorites</h2>
      <div className="d-flex flex-wrap">
        {store.favorites.map(item => (
          <Card key={item.uid + item.type} item={item} isFavorites />
        ))}
      </div>
    </div>
    );
}
