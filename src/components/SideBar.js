import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import qs from "qs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SideBar() {
	const { search } = useLocation();
	const navigate = useNavigate();
	const [searchTitle, setSearchTitle] = useState("");

	const buildQueryString = (operation, valueObj) => {
		const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

		const newQueryParams = {
			...currentQueryParams,
			[operation]: JSON.stringify(valueObj),
		};

		return qs.stringify(newQueryParams, { addQueryPrefix: true, encode: false });
	};
	const handleSearchChange = (event) => {
		setSearchTitle(event.target.value);
	};

	const handleSearch = (event) => {
		event.preventDefault();
		const titleQuery = buildQueryString("query", {
			title: { $regex: searchTitle },
		});
		navigate(titleQuery);
		console.log(titleQuery);
	};

	return (
		<div className="sidebar">
			<form className="sidebar-form" onSubmit={handleSearch}>
				<input
					type="text"
					value={searchTitle}
					onChange={handleSearchChange}
				></input>
				<button className="sidebar-button" type="submit">
					<FontAwesomeIcon icon={faMagnifyingGlass} />
				</button>
			</form>
			<ul className="sidebar-links">
				<h3 className="sidebar-title">Filter by City</h3>

				<Link to={buildQueryString("query", { city: "Manchester" })}>
					Manchester
				</Link>
				<br></br>
				<Link to={buildQueryString("query", { city: "Leeds" })}>Leeds</Link>
				<br></br>
				<Link to={buildQueryString("query", { city: "Sheffield" })}>Sheffield</Link>
				<br></br>
				<Link to={buildQueryString("query", { city: "Liverpool" })}>Liverpool</Link>
			</ul>
			<ul>
				<h3>Sort by:</h3>
				<Link to={buildQueryString("sort", { price: 1 })}>Price Ascending</Link>
				<br></br>
				<Link to={buildQueryString("sort", { price: -1 })}>Price Descending</Link>
			</ul>
		</div>
	);
}
