import axios from "axios";

const getProperties = (setAlert, search) => {
	return axios
		.get(`http://localhost:4000/api/v1/PropertyListing${search}`)
		.then((response) => response.data).then(setAlert({message: "Properties retrieved", success: true}))
		.catch((error) => {
			console.log(error);
			return setAlert({message: "There was a problem retrieving properties", success: false});
		});
};

export default getProperties;
