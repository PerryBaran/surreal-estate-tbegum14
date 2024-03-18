import React from "react";
import "../styles/property-card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBath,
	faBed,
	faSterlingSign,
	faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export default function PropertyCard(props) {
	const { title, price, bathrooms, bedrooms, type, city, email } = props;
	return (
		<div className="property-card">
			<div>
				<h3 className="property-card_title">{title}</h3>
				<p className="property-card_city">
					{type} - {city}
				</p>
				<p className="property-card_bedrooms">
					<FontAwesomeIcon icon={faBed} /> {bedrooms}
				</p>
				<p className="property-card_bathrooms">
					<FontAwesomeIcon icon={faBath} /> {bathrooms}
				</p>
				<p className="property-card_price">
					<FontAwesomeIcon icon={faSterlingSign} /> {price}
				</p>
			</div>

			<a href={email}>
				<button className="property-card_button" type="button">
					<FontAwesomeIcon icon={faEnvelope} />   Email
				</button>
			</a>
		</div>
	);
}
