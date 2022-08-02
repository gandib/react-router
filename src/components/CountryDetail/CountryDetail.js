import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
    const { countryName } = useParams();
    const [contry, setCountry] = useState({});
    useEffect(() => {
        const url = `https://restcountries.com/v3.1/name/${countryName}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCountry(data));
    }, [countryName]);
    console.log(contry)
    return (
        <div>
            <h4>Country Details for: {countryName}</h4>
            <h5>Name: {contry[0]?.name?.common}</h5>
        </div>
    );
};

export default CountryDetail;