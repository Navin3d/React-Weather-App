import React, { Fragment } from "react";

const ServicePage = () => {
    return (
        <Fragment>
            <h1 className="page-title">This is Service Page...</h1>
            <ol>
                <li>This service gives Temperature, Descrption of the mentioned Location.</li>
                <li>But The location Should only be an City.</li>
            </ol>
        </Fragment>
    )
}

export default ServicePage;