import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Person from './Components/Person/Person';
import Header from './Components/Header/Header';
import Countries from './Components/Countries/Countries';
function App() {
  return (
    <div className="App">
     
      <Person></Person>
      <Header></Header>
      <Countries></Countries>
    {/* <LoadCOuntries></LoadCOuntries> */}
   
    
    </div>
  );
}


function LoadCOuntries(){
  const [countries,setCountries] = useState([]);
  useEffect( () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))

  },[])
  return (

    <div >

      <h2 style={{backgroundColor:'lightcoral',margin:'20px', borderRadius:'15px'}}>Here is the list for rest countries</h2>
             {
                countries.map( country => <Country name={country.name.common} population={country.population}></Country>)
             }
     
    </div>
  )

  

}


function Country(props){
  return(
  <div>

    <h2 style={{backgroundColor:'lightblue',margin:'20px', borderRadius:'15px'}}>Country name: {props.name}</h2>
    <h3>Population : {props.population}</h3>
  </div>
  )
}

export default App;
