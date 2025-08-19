
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Details } from "./pages/Single";
import { Favorites } from "./pages/Favorites";

export const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>} >


      <Route path="/" element={<Home />} />
      <Route path="/details/:type/:uid" element={<Details />} />
      <Route path="/favorites" element={<Favorites />} />
    </Route>
  )
);