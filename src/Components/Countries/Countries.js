import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries,setCountries]=useState([]);
    useEffect( ()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))


    },[])
    return (
        <div > 
            <h1> Countries  in the coutries.js file : {countries.length}</h1>
            <div className='country-container'>
            {
                // countries.map( country =>  <Country 

                //     name={country.name.common}
                //       population={country.population}
                //       area={country.area}
                //       >  </Country>)

                //alternative way to  get data together
                countries.map( country =>  <Country country={country}  key={country.cca3} >  </Country>)
            }
            </div>
           
        </div>
    );
};

export default Countries;