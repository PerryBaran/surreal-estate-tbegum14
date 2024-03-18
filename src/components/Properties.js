import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PropertyCard from "./PropertyCard";
import "../styles/properties.css";
import "../styles/sidebar.css"
import getProperties from "../requests/getProperties";
import Alert from "./Alert";
import SideBar from "./SideBar";

export default function Properties() {
	const [properties, setProperties] = useState([]);
	const [alert, setAlert] = useState({ message: "", success: false });

	const { search } = useLocation();

	useEffect(() => {
		const propertyFunction = async () => {
			const propertyVariable = await getProperties(setAlert, search);
			console.log(propertyVariable);
			setProperties(propertyVariable);
		};
		propertyFunction();
	}, [search]);

	return (
		<div className="properties">
			<div className="sidebar">
				<SideBar />
			</div>
			<div className="property-cards">
				{!alert.message && (
					<Alert message={alert.message} success={alert.success} />
				)}
				{properties.map((property) => (
					<PropertyCard
						key={property._id}
						title={property.title}
						price={property.price}
						bathrooms={property.bathrooms}
						bedrooms={property.bedrooms}
						type={property.type}
						city={property.city}
						email={property.email}
					/>
				))}
			</div>
		</div>
	);
}
