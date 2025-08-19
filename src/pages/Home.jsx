import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import Card from "../components/Card.jsx"

export const Home = () => {

	const { store} = useGlobalReducer()
	return (

		<div>
			<h2>Characters</h2>
			<div className="d-flex flex-wrap">
				{store.people.slice(0, 5).map(p => <Card key={p.uid} item={p} />)}
			</div>


			<h2>Planets</h2>
			<div className="d-flex flex-wrap">
				{store.planets.slice(0, 5).map(p => <Card key={p.uid} item={p} />)}
			</div>
		</div>

	);
}; 