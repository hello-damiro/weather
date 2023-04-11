import './styles/style.css';
import { $, _$ } from './js/constants';
import { imgUrl } from './js/helpers';
import { fetchWeatherDataForCities } from './js/weather-api';
import dayjs from 'dayjs';

const apiKey = 'efb404dff353451dbe840459231104';
const locations = ['Manila', 'Perth', 'London', 'Oslo'];
const weatherData = [];
let metric = false;

function fetchWeather() {
    fetchWeatherDataForCities(apiKey, locations)
        .then((results) => {
            console.log(results);
            results.forEach((result) => {
                const weatherItem = {
                    loc: result.location.name,
                    country: result.location.country,
                    condition: result.current.condition.text,
                    icon: result.current.condition.icon,
                    is_day: result.current.is_day,
                    temp_c: result.current.temp_c,
                    temp_f: result.current.temp_f,
                    humid: result.current.humidity,
                    wind_degree: result.current.wind_degree,
                    wind_dir: result.current.wind_dir,
                    wind_kph: result.current.wind_kph,
                    wind_mph: result.current.wind_mph,
                };
                weatherData.push(weatherItem);
            });
            // Call a function here to render values on DOM
            renderDetails();
        })
        .catch((error) => console.error('Error fetching weather data:', error));
}

function renderDetails() {
    let cities = _$('.city');
    cities.forEach((city, index) => {
        city.querySelector('.name').textContent = weatherData[index].loc;
        if (metric)
            city.querySelector('.details').textContent =
                weatherData[index].condition + ' ○ ' + weatherData[index].temp_f + ' °f';
        else
            city.querySelector('.details').textContent =
                weatherData[index].condition + ' ○ ' + weatherData[index].temp_c + ' °c';

        const icon = weatherData[index].icon.substr(-7);
        const isDay = weatherData[index].is_day ? 'day' : 'night';
        const iconFile = imgUrl + 'images/icons/' + isDay + '/' + icon + '?raw=true';
        const img = city.querySelector('img');
        if (img) img.setAttribute('src', iconFile);
    });

    $('.date').textContent = dayjs().format('DD MMM YYYY');
    $('.main .temp').textContent = metric ? weatherData[0].temp_f : weatherData[0].temp_c;
    $('.main .icon em').textContent = metric ? ' °f' : ' °c';
    $('.main .details').textContent = weatherData[0].condition;
}

$('.main .icon').addEventListener('click', () => {
    metric = !metric;
    renderDetails();
});

fetchWeather();
