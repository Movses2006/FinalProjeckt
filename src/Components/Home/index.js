import { useState, useEffect } from "react";
import { API } from "../consts";
import Table from "../Table";
import "./style.css"

const Home = () => {
    const [countries, setCountries] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    useEffect(() => {
        const getCountries = async () => {
            try {
                const response = await fetch(API);
                const data = await response.json();
                setCountries(data.slice());
            } catch (error) {
                console.error("Error", error);
            }
        };
        getCountries();
    }, []);

    const filteredCountries = countries.filter(country =>
        country.name.common.toLowerCase().includes(searchInput.toLowerCase())
    );

    return (
        <>
        <input
                type="text"
                placeholder="Search countries"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
            />
        {!countries ? <div>Not Found</div> : <div className="Table">
        {filteredCountries.map((country, index) => (
                    <Table key={index} country={country} />
                ))}
        </div>} 
        </>
    );
}

export default Home;
