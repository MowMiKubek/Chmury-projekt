const axios = require('axios')

const config = {
    method: 'get',
    url: 'http://localhost:5000/api/users',
    headers: {'Content-Type': 'application/json', 'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDZmY2E3YzU4ZDlhZThiOGEyZGI3NjMiLCJpYXQiOjE2ODUwNTAyODIsImV4cCI6MTY4NTY1NTA4Mn0.P76A3NJuB2kmdzYZCs-YXoK_LaI2hKjOatXH97Ls9vY'}
}
axios(config)
    .then(({data: res}) => {
        console.log(res)
    })