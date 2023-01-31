const axios = require('axios')
axios.defaults.withCredentials = true
if (window.location.host === 'localhost:8080') {
  axios.defaults.baseURL = 'http://localhost/api/v1'
} else {
  axios.defaults.baseURL = 'https://bogeum.xyz/api/v1'
}
export default axios
