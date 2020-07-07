const axios = require("axios")

const city = process.argv[2]
const degree = process.argv[3]
const apiKey = "82e90f12abedca83747d28b3fd52250f"

//fetch the currect weather
// const url =
//     `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${degree}&appid=${apiKey}`
// console.log("url", url)


//fetch 5 days forcast weather
const url = //api.openweathermap.org/data/2.5/forecast?q={city name}&appid={your api key}
    `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${degree}&appid=${apiKey}`
console.log("url", url)


const weather_api = async () => {
    try {
        const response = await axios.get(url).catch(err => console.log(err))
        return response
    }
    catch (err) {
        console.log(err)
    }
}

//fetch the currect weather
// const weather = async () => {
//     const weather_detail = await weather_api()
//     console.log("api", weather_detail)
//     const list = weather_detail.list
//     console.log("list", list)
//     const name = weather_detail.data.name
//     //const main = weather_detail.weather[0].main
//     console.log(`${name}, "temp", ${weather_detail.data.main.temp}`)
// }

// weather()

//fetch 5 days forcast weather

const weather_forcast = async () => {
    const weather_detail = await weather_api()
    //console.log("api", weather_detail.data.list)
    const list = weather_detail.data.list
    console.log("list length", list.length)

    //list.length is 40hours, the origial api is 5 days, so i is one day is 8 hours
    for (let i = 0; i < list.length; i = i + 8) {
        console.log(`${weather_detail.data.city.name}, "temp", ${weather_detail.data.list[i].main.temp}`)

    }
}

weather_forcast()




