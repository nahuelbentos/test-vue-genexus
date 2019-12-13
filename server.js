const express = require('express')
const SpotifyWebApi = require('spotify-web-api-node')
const axios = require('axios')

let app = express()
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})
app.listen(3000)

console.log('API server started on: 3000')
definirServicios();
console.log('Servicios definidos.')

function token(req, res) {
  let spotifyApi = new SpotifyWebApi({
    clientId: 'd501f329a8534cc99f761c0a7d451d29',
    clientSecret: 'e327d4c1a7114069ad255be479d93c71'
  })

  spotifyApi.clientCredentialsGrant()
    .then(data => {
      const accessToken = data.body['access_token']
      res.send({
        status: 'success',
        accessToken: accessToken
      })
    }, err => {
      res.send({
        status: 'error',
        error: err
      })
    })
}

function test(req, res){
  console.log('Server OK')
}


function obtenerSDTServicios(req, res) {

  console.log('==============================')
  console.log('Parameters: ')
  console.log(req.query.cysLug)
  console.log(req.query.date)
  console.log(req.query.cysOrd)
  console.log('==============================')
  console.log('Execute: ')
  axios
    .post('http://192.1.0.71/ACU_Web.NetEnvironment_Prototipo/rest/wsObtenerSDTServicios', {
      CysLug: req.query.cysLug,
      Date: req.query.date,
      CysOrd: req.query.cysOrd
    })
    .then(response => {
      console.log('Response: ')
      console.log(response.data)
      res.send(response.data.SDTServicios)
    })
    .catch(err => {
      console.log('Error: ')
      console.log(err)
    })
}


function executeABMServicios(req, res) {

  console.log('==============================')
  console.log('Parameters: ')
  console.log(req.query.Modo)
  console.log(req.query.servicio)
  let obj = JSON.parse(req.query.servicio);
  console.log(obj)
  console.log(req.query)
  console.log('==============================')
  console.log('Execute: ')
  axios
    .post('http://192.1.0.71/ACU_Web.NetEnvironment_Prototipo/rest/wsABMServicios', {
      Modo: req.query.Modo,
      SDTServicios: obj
    })
    .then(response => {
      console.log('Response: ')
      console.log(response.data)
      res.send(response.data.Respuesta)
    })
    .catch(err => {
      console.log('Error: ')
      console.log(err)
    })
}


function definirServicios() {

  app.route('/token')
    .get(token)

  app.route('/test')
  .get(test)

  app.route('/obtenerSDTServicios')
    .get(obtenerSDTServicios)

  app.route('/executeABMServicios')
    .get(executeABMServicios)
}
