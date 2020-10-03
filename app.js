const cron = require('node-cron')
const express = require('express')
const informations = require('./weather.js')
const port = process.env.PORT || 8080
const app = express();

const task = cron.schedule('* * * * *', () => {
  informations.getCity()
  console.log('Tarefa rodando de 1 em 1 minuto')
}, { scheduled: true, timezone: 'America/Sao_Paulo' })

task.start()
app.listen(port)