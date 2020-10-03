const axios = require('axios')
const bot = require('./bot.js')
const config = require('./keys/weather');
const url = `https://api.hgbrasil.com/weather?format=json-cors&key=${config.key}&woeid=${config.idGravatai}`

module.exports.getCity = async function () {
  await axios.get(url)
    .then((res) => {
      let text = `${res.data.results.city_name}, ${res.data.results.date} - ${res.data.results.time}. ${res.data.results.description} e temperatura de ${res.data.results.temp}º graus. ${res.data.results.temp > 20 ? '🥵' : '🥶'} #clima #gravatai #climatempo #RS #GTI #temperatura #GravataiRS #BOT`
      bot.twitter(text)
    })
    .catch((err) => {
      console.log(err)
    })
}