import "../styles/add-property.css";
import React, { useState } from "react";
import axios from "axios";
import Alert from "./Alert";

export default function AddProperty() {
	const initialState = {
		fields: {
			title: "",
			type: "",
			bedrooms: 0,
			bathrooms: 0,
			price: 0,
			city: "Manchester",
			email: "",
		},
		alert: {
			message: "",
			isSuccess: false,
		},
	};

	const [fields, setFields] = useState(initialState.fields);
	const [alert, setAlert] = useState(initialState.alert);

	const handleAddProperty = (event) => {
		event.preventDefault();
		return axios({
			method: "post",
			url: "http://localhost:4000/api/v1/PropertyListing",
			data: fields,
		})
			.then((response) => console.log(response.data))
			.then(setAlert({ message: "Property Added", isSuccess: true }))
			.catch((error) => {
                console.log(error);
				return setAlert({ message: "Error", isSuccess: false });
			});
	};

	const handleFieldChange = (event) => {
		setFields((prevState) => {
			return { ...prevState, [event.target.name]: event.target.value };
		});
	};

	return (
		<div className="add-property">
			<Alert message={alert.message} success={alert.isSuccess} />
			<form onSubmit={handleAddProperty}>
				<label htmlFor="title">Title:</label>
				<input
					type="text"
					id="title"
					name="title"
					value={fields.title}
					onChange={handleFieldChange}
				/>
				<br></br>
				<label htmlFor="city">City:</label>
				<select
					id="city"
					name="city"
					value={fields.city}
					onChange={handleFieldChange}
				>
					<option value="Manchester">Manchester</option>
					<option value="Leeds">Leeds</option>
					<option value="Sheffield">Sheffield</option>
					<option value="Liverpool">Liverpool</option>
				</select>
				<br></br>
				<label htmlFor="type">Type:</label>
				<select
					id="type"
					name="type"
					value={fields.type}
					onChange={handleFieldChange}
				>
					<option value=""></option>
					<option value="Flat">Flat</option>
					<option value="Detached">Detached</option>
					<option value="Semi-detached">Semi-detached</option>
					<option value="Terraced">Terraced</option>
					<option value="End of Terrace">End of Terrace</option>
					<option value="Cottage">Cottage</option>
					<option value="Bungalow">Bungalow</option>
				</select>
				<br></br>
				<label htmlFor="Bedrooms">Bedrooms:</label>
				<input
					type="number"
					id="Bedrooms"
					name="bedrooms"
					value={fields.bedrooms}
					onChange={handleFieldChange}
				/>
				<br></br>
				<label htmlFor="Bathrooms">Bathrooms:</label>
				<input
					type="number"
					id="Bathrooms"
					name="bathrooms"
					value={fields.bathrooms}
					onChange={handleFieldChange}
				/>
				<br></br>
				<label htmlFor="price">Price:</label>
				<input
					type="number"
					id="price"
					name="price"
					value={fields.price}
					onChange={handleFieldChange}
				/>
				<br></br>
				<label htmlFor="email">Email:</label>
				<input
					type="text"
					id="email"
					name="email"
					value={fields.email}
					placeholder="hello@helloworld.com"
					onChange={handleFieldChange}
				/>
				<br></br>
				<button type="submit">Add</button>
			</form>
		</div>
	);
}
