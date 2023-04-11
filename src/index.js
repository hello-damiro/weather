import './styles/style.css';
import { fetchWeatherDataForCities } from './js/weather-api';

const apiKey = 'efb404dff353451dbe840459231104';
const locations = ['Manila', 'Perth'];
const temperatures = [];

fetchWeatherDataForCities(apiKey, locations)
    .then((results) => {
        results.forEach((result) => {
            const temperature = result.current.temp_c;
            const location = result.location.name;
            temperatures.push(temperature);
            console.log(`The temperature in ${location} is ${temperature} degrees Celsius.`);
        });
    })
    .catch((error) => {
        console.error('Error fetching weather data:', error);
    });

console.log(temperatures);
