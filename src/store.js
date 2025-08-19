export const initialStore=()=>{
  return{
    people: [],
    planets:[],
    favorites:[]
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_people':
      return {
        ...store,
        people:[...store.people, ...action.payload]
      }
    case 'add_planets':
      return {
        ...store,
        planets:[...store.planets, ...action.payload]
      }
    case 'add_favorites':
      return {
        ...store,
        favorites:[...store.favorites, action.payload]
      }
    case 'delete_favorites':
      return {
       ...store,
        favorites: store.favorites.filter(fav => fav.uid !== action.payload.uid)
      }
    default:
      return store;
  }    
}
