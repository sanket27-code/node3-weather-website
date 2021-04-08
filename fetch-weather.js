const request = require('postman-request');

const fetch_weather = (location, callback) => {
    const current_url = `http://api.weatherstack.com/current?access_key=f2dbe8ed9d959d232be7c15d97807976&query=${location}`
    request({ url: current_url, json:true }, (error, {body}) => {
        if (error) {
            callback({err:'something went wrong!'})
        } else if (body.error) {
            callback({err:'Unable to fetch data. Please check your entered location...'})
        } else {
            callback({
                location:`${body.location.name}, ${body.location.country}`,
                latitude: body.location.lat,
                longitude: body.location.lon,
                des: `Temperature is ${body.current.temperature} degree out. It is ${body.current.weather_descriptions[0]} and feels like ${body.current.feelslike} degree. Humidity is ${body.current.humidity}%.`
            })
        }
    })
}

module.exports = fetch_weather;