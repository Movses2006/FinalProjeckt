import React, { memo } from "react";
import "./style.css"

const Table = ({ index, country, }) => {
    return (
        <div className="card">
            <img src={country.flags.svg} alt={`${country.name.common} flag`} />
            <h3>{country.name.common}</h3>
            <h4>Languages: {country.name.languages}</h4>
            <h4>Timezones: {country.timezones}</h4>
        </div>
    );
}

export default memo(Table);
