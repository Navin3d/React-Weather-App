import React, { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
import { Alert } from "reactstrap";

const INITIAL_BODY = {
    location: ""
}

const LocationForm = () => {

    const [body, setBody] = useState(INITIAL_BODY);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBody(prevState => ({ ...prevState, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submitted...");
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${body.location}&appid=fcfbd6c85d6979c627dbe537fb0e9331`;
        const response = await axios.get(url).catch(e => {
            swal(`Location Not found... \n\n Enter City Names Only...`)
        });

        var tempValue = response.data['main']['temp'];
        var nameValue = response.data['name'];
        var descValue = response.data['weather'][0]['description'];

        if(response.status === 200) {
            swal(`Temerature: ${tempValue} \n\n Location: ${nameValue} \n\n Description: ${descValue}`);
        }
        console.log("Response: " + JSON.stringify(response.data));
    }

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                {/* aria-label="Amount (to the nearest dollar)"  */}
                <div className="col-md-6">
                    <h5 className="form-field">Location</h5>
                    <input type="text" id="location" placeholder="Enter the Location" name="location" value={body.location} onChange={handleChange}  class="form-control"/>
                </div>
                <input className="btn btn-primary" type="submit" value="Get Weather" />
            </form>
        </div>
    );
}

export default LocationForm;
