import CountryCard from '../components/CountryCard';
import './home.css';
import { useEffect, useState } from 'react';
import { getAllCountries } from '../services/index';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';

function Home() {
    const [allCountriesList, setCountriesList] = useState([]);
    const [filteredCoutriesList, setFilteredCountriesList] = useState([]);
    const [region, setRegion] = useState('');
    const [countryName, setCountryName] = useState('');

    // let navigate = useNavigate(); 
//   const routeChange = () =>{ 
//     let path =`/contactUs`; 
//     navigate(path);
//   }

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
        <div>
          <div>
          <Navbar/>
            </div>
            <div>
            <div className='filters-wrapper'>
            <TextField
            className='mr-4'
                    id="fullWidth"
                    margin="dense"
                    label="Filter by Name"
                    variant="outlined"
                    onChange={handleCountryNameChange}
                    value={countryName}
                />
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-helper-label">Filter by Region</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={region}
                        label="Filter by Region"
                        onChange={handleRegionChange}
                    >
                        <MenuItem value={''}>All</MenuItem>
                        <MenuItem value={'Africa'}>Africa</MenuItem>
                        <MenuItem value={'Americas'}>Americas</MenuItem>
                        <MenuItem value={'Asia'}>Asia</MenuItem>
                        <MenuItem value={'Europe'}>Europe</MenuItem>
                        <MenuItem value={'Oceania'}>Oceania</MenuItem>
                    </Select>
                    
                </FormControl>
                
            {/* <button className='suggestions-button'
            onClick={routeChange}
              >
              Give us your suggetions  
            </button> */}
            </div>
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