import axios from 'axios'

axios.defaults.baseURL = 'https://drf-abi-1946767e308e.herokuapp.com/'
axios.defaults.headers.post['Content-type'] = 'multipart/form-data'
axios.defaults.withCredentials = true