import './styles/style.css';
import { $, _$ } from './js/constants';
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
    for (let index = 1; index < cities.length; index++) {
        cities[index].querySelector('.name').textContent = weatherData[index].loc;
        cities[index].querySelector('.details').textContent = weatherData[index].condition;
        if (metric) {
            cities[index].querySelector('em').textContent = weatherData[index].temp_f + ' °f';
        } else {
            cities[index].querySelector('em').textContent = weatherData[index].temp_c + ' °c';
        }

        const icon = weatherData[index].icon.substr(-7);
        const isDay = weatherData[index].is_day ? 'day' : 'night';
        const iconFile = './images/icons/' + isDay + '/' + icon;
        const img = cities[index].querySelector('img');
        img.setAttribute('src', './assets/images/icons/day/113.png');
    }

    //     if (img) img.setAttribute('src', 'assets/images/icons/day/113.png');
    //     // city.querySelector('img').setAttribute('src', iconFile);
    //     // city.querySelector('img').setAttribute('alt', weatherData[index].condition);
    // });

    $('.date').textContent = dayjs().format('DD MMM YYYY');
    $('.main .temp').textContent = metric ? weatherData[0].temp_f : weatherData[0].temp_c;
    $('.main .icons').textContent = metric ? ' °f' : ' °c';
}

$('.main .icons').addEventListener('click', () => {
    metric = !metric;
    renderDetails();
});

fetchWeather();
