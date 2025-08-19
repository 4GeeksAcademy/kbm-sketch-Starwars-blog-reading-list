import { useEffect, useState } from "react";
import { useParams ,Link} from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";


export const Details = () => {

  const { store, dispatch } = useGlobalReducer()
  const { type, uid } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    async function loadDetail() {
      let res = await fetch(`https://www.swapi.tech/api/${type}/${uid}`);
      let data = await res.json();
      setItem({ ...data.result.properties, name: data.result.properties.name || data.result.properties.title, uid, type });
    }
    loadDetail();
  }, [type, uid]);

  if (!item) return <p>Loading...</p>;


  const fav = store.favorites.find(f => f.uid === item.uid && f.type === item.type);
  return (
    <div>
      <h2>{item.name}</h2>
      <button className="btn btn-warning" onClick={() => {
        if (fav) dispatch({ type: "delete_favorites", payload: item });
        else dispatch({ type: "add_favorites", payload: item });
      }}>
        {fav ? "Remove from Favorites" : "Add to Favorites"}
      </button>
      <ul>
        {Object.keys(item).map(k => (
          <li key={k}><b>{k}:</b> {item[k]}</li>
        ))}
      </ul>
      <Link to={`/`} className="btn btn-secondary">Back</Link>
    </div>
  );
};


