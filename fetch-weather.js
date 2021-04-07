const request = require('postman-request');

const fetch_weather = (location, callback) => {
    const current_url = `http://api.weatherstack.com/current?access_key=f2dbe8ed9d959d232be7c15d97807976&query=${location}`
    request({ url: current_url, json:true }, (error, response) => {
        if (error) {
            callback({err:'something went wrong!'})
        } else if (response.body.error) {
            callback({err:'Unable to fetch data. Please check your entered location...'})
        } else {
            callback({
                location:`${response.body.location.name}, ${response.body.location.country}`,
                latitude: response.body.location.lat,
                longitude: response.body.location.lon,
                des: `Temperature is ${response.body.current.temperature} degree. It is ${response.body.current.weather_descriptions[0]} and there is ${response.body.current.precip}% chances of rain.`
            })
        }
    })
}

module.exports = fetch_weather;