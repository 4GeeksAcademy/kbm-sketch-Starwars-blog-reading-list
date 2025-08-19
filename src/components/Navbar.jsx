import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-dark bg-dark p-2">
			<Link to="/" className="navbar-brand">Star Wars</Link>
			<Link to="/favorites" className="btn btn-warning">Favorites</Link>
		</nav>
	);
};