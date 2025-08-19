import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export default function Card({ item, isFavorites = false  }) {

    const { store, dispatch } = useGlobalReducer()
    const isFav = store.favorites.find(f => f.uid === item.uid && f.type === item.type);

    function toggleFav() {
        if (isFav) {
            dispatch({ type: "delete_favorites", payload: item });
        } else {
            dispatch({ type: "add_favorites", payload: item });
        }
    }

    return (
        <div className="card m-2" style={{ width: "12rem" }}>

            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>

                {!isFavorites && (
                    <Link
                        to={`/details/${item.type}/${item.uid}`}
                        className="btn btn-sm btn-dark me-2"
                    >
                        Details
                    </Link>
                )}

                <button
                    className="btn btn-sm btn-warning"
                    onClick={toggleFav}
                >
                    {isFavorites ? "Remove" : isFav ? "Remove" : "Favorite"}
                </button>
            </div>
        </div>
    )
}
