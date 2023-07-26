import CountryCard from "./components/CountryCard";
import "./app.css"
import { useEffect, useState } from "react";
import { getAllCountries } from './services/index.js'

function App() {
  const [countriesList, setCountriesList] = useState([]);
  useEffect(() => {
    getAllCountries().then((result) => {
      const countries = result.data;
      setCountriesList(countries);
    });
  }, [])
  return (
    <div className="App">
      <div className="country-card-wrapper">
        {
          countriesList.map(country => (

            <CountryCard
              key= {country.alpha3Code}
              name={country.name}
              capital={country.capital}
              population={country.population}
              flagUrl={country.flags.png}
            />
          )
          )
        }
      </div>
    </div>
  );
}

export default App;
