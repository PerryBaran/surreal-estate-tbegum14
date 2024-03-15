import "../styles/App.css";
import NavBar from "./NavBar";
import {Routes, Route } from "react-router-dom";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer";


function App() {
	return (
		<div className="App">
			<BrowserRouter>
			<NavBar className="navbar"/>
			<Routes className="nav-bar_routes">
				<Route path="/" element={<Properties />} />
				<Route path="add-property" element={<AddProperty />} />
			</Routes>
			</BrowserRouter>
			<Footer />
		</div>
	);
}

export default App;
