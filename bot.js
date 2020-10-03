const twit = require('twit')
const config = require('./keys/twitter.js')
const twitterAuth = new twit(config)

module.exports.twitter = function (text) {
  twitterAuth.post('https://api.twitter.com/1.1/statuses/update.json', {
    status: text
  }, (err, data, response) => {
    console.log(data)
  })
}
