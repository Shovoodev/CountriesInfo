import CountryCard from '../components/CountryCard';
import './home.css';
import { useEffect, useState } from 'react';
import { getAllCountries } from '../services/index';
import { Link } from 'react-router-dom';

function Home() {
    const [allCountriesList, setCountriesList] = useState([]);
    const [filteredCoutriesList, setFilteredCountriesList] = useState([]);
    const [region, setRegion] = useState('');
    const [countryName, setCountryName] = useState('');

    const handleRegionChange = (event) => {
        setRegion(event.target.value);
    };

    const handleCountryNameChange = (event) => {
        setCountryName(event.target.value);
    };

    useEffect(() => {
        getAllCountries().then((result) => {
            const coutries = result.data;
            setCountriesList(coutries);
            setFilteredCountriesList(coutries);
        });
    }, []);

    useEffect(() => {
        console.log("Region or country name changed: ", region, countryName);
        if (region === '' && countryName === '') {
            setFilteredCountriesList(allCountriesList);
        } else {
            let filteredCountries = allCountriesList;
            if (region.length) {
                filteredCountries = filteredCountries.filter(country => {
                    if (country.region === region)
                        return true;
                    return false;
                });
            }
            if (countryName.length) {
                filteredCountries = filteredCountries.filter(country => {
                    const lowercaseName = country.name.toLowerCase();
                    if (lowercaseName.includes(countryName.toLowerCase()))
                        return true;
                    return false;
                });
            }
            setFilteredCountriesList(filteredCountries);
        }
    }, [region, allCountriesList, countryName]);

    return (
        <div className="App">
            <div className='filters-wrapper'>
                
            </div>
            <div className='country-card-wrapper'>
                {
                    filteredCoutriesList.map(country => (
                        <Link
                            to={`/countries/${country.alpha3Code}`}
                            key={country.alpha3Code}
                            style={{ textDecoration: 'none' }}
                        >
                            <CountryCard
                                name={country.name}
                                capital={country.capital}
                                population={country.population}
                                flagUrl={country.flags.png}
                            />
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}

export default Home;