async function fetchWeatherData(apiKey, location) {
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
}

export async function fetchWeatherDataForCities(apiKey, locations) {
    const promises = locations.map((location) => fetchWeatherData(apiKey, location));
    const results = await Promise.all(promises);
    return results;
}
