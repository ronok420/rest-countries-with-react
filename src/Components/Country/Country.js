import React from 'react';
import './Country.css'

const Country = (props) => {
    console.log(props.country);
    const {area, region, population, name,flags}=props.country;
    return (
        // <div className='country' >
        //     <h2>Country : {props.name}</h2>
        //     <h4> Population: {props.population}</h4>
        //     <h4> Area: {props.area}</h4>
        // </div>

        // atlternateive way
        <div className='country' >
            <img src={flags.png} alt="" />
              <h2>Country : {name.common}</h2>
            <h4> Population: {population}</h4>
            <h4> Region: {region}</h4>
            <h4> Area: {area}</h4>
        </div>
    );
};

export default Country;