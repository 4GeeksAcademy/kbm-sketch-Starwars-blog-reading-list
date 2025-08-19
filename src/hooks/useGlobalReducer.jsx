import { useContext, useReducer, createContext, useEffect } from "react";
import storeReducer, { initialStore } from "../store"
const StoreContext = createContext()


export function StoreProvider({ children }) {

    const [store, dispatch] = useReducer(storeReducer, initialStore())

    useEffect(() => {
        async function load(endpoint, type) {
            let res = await fetch(`https://www.swapi.tech/api/${endpoint}`);
            let data = await res.json();
            let simpleList = data.results.map(item => ({
                name: item.name,
                uid: item.uid,
                type: endpoint,
                url: item.url
            }));
            dispatch({ type, payload: simpleList });
        }


        load("people", "add_people");
        load("planets", "add_planets")
    }, []);



    return <StoreContext.Provider value={{ store, dispatch }}>
        {children}
    </StoreContext.Provider>
}


export default function useGlobalReducer() {
    const { dispatch, store } = useContext(StoreContext)
    return { dispatch, store };
}