// console.log('Starting')

setTimeout( () => {
    console.log('2 seconds delay')
},2000 * 100)

// setTimeout( () => {
//     console.log('0 sec delay')
// }, 0)

// console.log('Stopping')

const request = require('postman-request')

const url = 'http://api.weatherstack.com/current?access_key=4a680f9000818bc494865ab0547e07ad&query=40.7127,-74.0059'

request({uri: url}, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})

